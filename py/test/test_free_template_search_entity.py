# FreeTemplateSearch entity test

import json
import os
import time

import pytest

from memesiocontentcreation_sdk.utility.voxgig_struct import voxgig_struct as vs
from memesiocontentcreation_sdk import MemesioContentCreationSDK
from memesiocontentcreation_sdk.core import helpers
from memesiocontentcreation_sdk.config import shared_config
from memesiocontentcreation_sdk.feature.base_feature import MemesioContentCreationBaseFeature

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class _FailHook(MemesioContentCreationBaseFeature):
    def __init__(self):
        super().__init__()
        self.name = "failhook"
        self.unexpected = 0

    def init(self, ctx, options):
        pass

    def PreSpec(self, ctx):
        raise RuntimeError("free_template_search hook failed")

    def PreUnexpected(self, ctx):
        self.unexpected += 1



# main.kit.test.live.strict is true (the default is true): a live
# request that fails, or a live test missing an input it needs,
# fails the test.
# An account with no record for a test to read skips it either way.
LIVE_STRICT = True


class TestFreeTemplateSearchEntity:

    def test_should_create_instance(self):
        testsdk = MemesioContentCreationSDK.test(None, None)
        ent = testsdk.FreeTemplateSearch(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "free_template_search": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = MemesioContentCreationSDK.test(seed, None)
        seen = list(base.FreeTemplateSearch(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from memesiocontentcreation_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = MemesioContentCreationSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.FreeTemplateSearch(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_report_a_failed_stream(self):
        offline = {"net": {"offline": True}}
        with pytest.raises(Exception, match="offline"):
            list(MemesioContentCreationSDK.test(offline, None).FreeTemplateSearch(None).stream("list", None, None))

        quiet = {"ctrl": {"throw": False}}
        list(MemesioContentCreationSDK.test(offline, None).FreeTemplateSearch(None).stream("list", None, quiet))

        if "rbac" in (shared_config().get("feature") or {}):
            denied = MemesioContentCreationSDK.test(
                None, {"feature": {"rbac": {"active": True, "deny": True}}})
            with pytest.raises(Exception) as err:
                list(denied.FreeTemplateSearch(None).stream("list", None, None))
            assert "rbac_denied" == getattr(err.value, "code", None)

    def test_should_leave_the_callers_ctrl(self):
        explain = {}
        ctrl = {"explain": explain}
        list(MemesioContentCreationSDK.test(None, None).FreeTemplateSearch(None).stream("list", None, {"ctrl": ctrl}))
        assert ["explain"] == list(ctrl.keys())
        assert explain is ctrl["explain"] and 0 < len(explain)

    def test_should_fire_pre_unexpected(self):
        hook = _FailHook()
        client = MemesioContentCreationSDK({"feature": {"test": {"active": True}}, "extend": [hook]})
        with pytest.raises(Exception, match="hook failed"):
            client.FreeTemplateSearch(None).list(None, None)
        assert 0 < hook.unexpected

        fired = hook.unexpected
        assert client.FreeTemplateSearch(None).list(None, {"throw": False}) is None
        assert fired < hook.unexpected

    def test_should_refuse_an_invalid_request(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        client = MemesioContentCreationSDK.test(
            None, {"feature": {"validate": {"active": True}}})
        with pytest.raises(Exception) as err:
            client.FreeTemplateSearch(None).list({"media_type": 1}, None)
        assert "validate_failed" == getattr(err.value, "code", None)

    def test_should_run_basic_flow(self):
        setup = _free_template_search_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["list"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "free_template_search." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        free_template_search_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.free_template_search")))
        free_template_search_ref01_data = None
        if len(free_template_search_ref01_data_raw) > 0:
            free_template_search_ref01_data = helpers.to_map(free_template_search_ref01_data_raw[0][1])

        # LIST
        free_template_search_ref01_ent = client.FreeTemplateSearch(None)
        free_template_search_ref01_match = {}

        free_template_search_ref01_list_result = free_template_search_ref01_ent.list(free_template_search_ref01_match, None)
        assert isinstance(free_template_search_ref01_list_result, list)



def _free_template_search_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/free_template_search/FreeTemplateSearchTestData.json")
    with open(entity_data_file, "r", encoding="utf-8") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = MemesioContentCreationSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["free_template_search01", "free_template_search02", "free_template_search03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Whether *_ENTID supplied the idmap, read before env_override consumes
    # it: without it, the ids a live flow binds are the fixture's synthetic ones.
    _entid_env_raw = os.environ.get(
        "MEMESIO_CONTENT_CREATION_TEST_FREE_TEMPLATE_SEARCH_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "MEMESIO_CONTENT_CREATION_TEST_FREE_TEMPLATE_SEARCH_ENTID": idmap,
        "MEMESIO_CONTENT_CREATION_TEST_LIVE": "FALSE",
        "MEMESIO_CONTENT_CREATION_TEST_EXPLAIN": "FALSE",
        "MEMESIO_CONTENT_CREATION_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("MEMESIO_CONTENT_CREATION_TEST_FREE_TEMPLATE_SEARCH_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("MEMESIO_CONTENT_CREATION_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("MEMESIO_CONTENT_CREATION_APIKEY"),
            },
            extra or {},
        ])
        client = MemesioContentCreationSDK(helpers.to_map(merged_opts))

    _live = env.get("MEMESIO_CONTENT_CREATION_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("MEMESIO_CONTENT_CREATION_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
