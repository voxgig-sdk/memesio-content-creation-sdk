# PublicTemplateMediaItem entity test

import json
import os
import time

import pytest

from memesiocontentcreation_sdk.utility.voxgig_struct import voxgig_struct as vs
from memesiocontentcreation_sdk import MemesioContentCreationSDK
from memesiocontentcreation_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestPublicTemplateMediaItemEntity:

    def test_should_create_instance(self):
        testsdk = MemesioContentCreationSDK.test(None, None)
        ent = testsdk.PublicTemplateMediaItem(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _public_template_media_item_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "public_template_media_item." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set MEMESIO_CONTENT_CREATION_TEST_PUBLIC_TEMPLATE_MEDIA_ITEM_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        public_template_media_item_ref01_ent = client.PublicTemplateMediaItem(None)
        public_template_media_item_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.public_template_media_item"), "public_template_media_item_ref01"))
        public_template_media_item_ref01_data["slug"] = setup["idmap"]["slug01"]

        public_template_media_item_ref01_data = helpers.to_map(runner.entity_data(public_template_media_item_ref01_ent.create(public_template_media_item_ref01_data, None)))
        assert public_template_media_item_ref01_data is not None
        assert public_template_media_item_ref01_data["id"] is not None

        # LOAD
        public_template_media_item_ref01_match_dt0 = {
            "id": public_template_media_item_ref01_data["id"],
        }
        public_template_media_item_ref01_data_dt0_loaded = public_template_media_item_ref01_ent.load(public_template_media_item_ref01_match_dt0, None)
        public_template_media_item_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(public_template_media_item_ref01_data_dt0_loaded))
        assert public_template_media_item_ref01_data_dt0_load_result is not None
        assert public_template_media_item_ref01_data_dt0_load_result["id"] == public_template_media_item_ref01_data["id"]



def _public_template_media_item_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/public_template_media_item/PublicTemplateMediaItemTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = MemesioContentCreationSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["public_template_media_item01", "public_template_media_item02", "public_template_media_item03", "gif01", "gif02", "gif03", "template01", "template02", "template03", "slug01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "MEMESIO_CONTENT_CREATION_TEST_PUBLIC_TEMPLATE_MEDIA_ITEM_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "MEMESIO_CONTENT_CREATION_TEST_PUBLIC_TEMPLATE_MEDIA_ITEM_ENTID": idmap,
        "MEMESIO_CONTENT_CREATION_TEST_LIVE": "FALSE",
        "MEMESIO_CONTENT_CREATION_TEST_EXPLAIN": "FALSE",
        "MEMESIO_CONTENT_CREATION_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("MEMESIO_CONTENT_CREATION_TEST_PUBLIC_TEMPLATE_MEDIA_ITEM_ENTID"))
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
