# CreateMeme entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from memesiocontentcreation_sdk import MemesioContentCreationSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestCreateMemeEntity:

    def test_should_create_instance(self):
        testsdk = MemesioContentCreationSDK.test(None, None)
        ent = testsdk.CreateMeme(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _create_meme_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "create_meme." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set MEMESIOCONTENTCREATION_TEST_CREATE_MEME_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        create_meme_ref01_ent = client.CreateMeme(None)
        create_meme_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.create_meme"), "create_meme_ref01"))

        create_meme_ref01_data = helpers.to_map(create_meme_ref01_ent.create(create_meme_ref01_data, None))
        assert create_meme_ref01_data is not None



def _create_meme_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/create_meme/CreateMemeTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = MemesioContentCreationSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["create_meme01", "create_meme02", "create_meme03"],
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
        "MEMESIOCONTENTCREATION_TEST_CREATE_MEME_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "MEMESIOCONTENTCREATION_TEST_CREATE_MEME_ENTID": idmap,
        "MEMESIOCONTENTCREATION_TEST_LIVE": "FALSE",
        "MEMESIOCONTENTCREATION_TEST_EXPLAIN": "FALSE",
        "MEMESIOCONTENTCREATION_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("MEMESIOCONTENTCREATION_TEST_CREATE_MEME_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("MEMESIOCONTENTCREATION_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            {
                "apikey": env.get("MEMESIOCONTENTCREATION_APIKEY"),
            },
            extra or {},
        ])
        client = MemesioContentCreationSDK(helpers.to_map(merged_opts))

    _live = env.get("MEMESIOCONTENTCREATION_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("MEMESIOCONTENTCREATION_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
