# AiJob entity test

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



# main.kit.test.live.strict is true (the default is true): a live
# request that fails, or a live test missing an input it needs,
# fails the test.
# An account with no record for a test to read skips it either way.
LIVE_STRICT = True


class TestAiJobEntity:

    def test_should_create_instance(self):
        testsdk = MemesioContentCreationSDK.test(None, None)
        ent = testsdk.AiJob(None)
        assert ent is not None

    def test_should_refuse_an_invalid_request(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        client = MemesioContentCreationSDK.test(
            None, {"feature": {"validate": {"active": True}}})
        with pytest.raises(Exception) as err:
            client.AiJob(None).load({"id": 1}, None)
        assert "validate_failed" == getattr(err.value, "code", None)

    def test_should_run_basic_flow(self):
        setup = _ai_job_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "ai_job." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        client = setup["client"]

        # CREATE
        ai_job_ref01_ent = client.AiJob(None)
        ai_job_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.ai_job"), "ai_job_ref01"))

        ai_job_ref01_data = helpers.to_map(runner.entity_data(ai_job_ref01_ent.create(ai_job_ref01_data, None)))
        assert ai_job_ref01_data is not None
        assert ai_job_ref01_data["id"] is not None

        # LOAD
        ai_job_ref01_match_dt0 = {
            "id": ai_job_ref01_data["id"],
        }
        ai_job_ref01_data_dt0_loaded = ai_job_ref01_ent.load(ai_job_ref01_match_dt0, None)
        ai_job_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(ai_job_ref01_data_dt0_loaded))
        assert ai_job_ref01_data_dt0_load_result is not None
        assert ai_job_ref01_data_dt0_load_result["id"] == ai_job_ref01_data["id"]



def _ai_job_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/ai_job/AiJobTestData.json")
    with open(entity_data_file, "r", encoding="utf-8") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = MemesioContentCreationSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["ai_job01", "ai_job02", "ai_job03"],
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
        "MEMESIO_CONTENT_CREATION_TEST_AI_JOB_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "MEMESIO_CONTENT_CREATION_TEST_AI_JOB_ENTID": idmap,
        "MEMESIO_CONTENT_CREATION_TEST_LIVE": "FALSE",
        "MEMESIO_CONTENT_CREATION_TEST_EXPLAIN": "FALSE",
        "MEMESIO_CONTENT_CREATION_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("MEMESIO_CONTENT_CREATION_TEST_AI_JOB_ENTID"))
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
