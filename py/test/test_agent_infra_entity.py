# AgentInfra entity test

import json
import os
import time

import pytest

from memesiocontentcreation_sdk.utility.voxgig_struct import voxgig_struct as vs
from memesiocontentcreation_sdk import MemesioContentCreationSDK
from memesiocontentcreation_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestAgentInfraEntity:

    def test_should_create_instance(self):
        testsdk = MemesioContentCreationSDK.test(None, None)
        ent = testsdk.AgentInfra(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _agent_infra_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "agent_infra." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set MEMESIO_CONTENT_CREATION_TEST_AGENT_INFRA_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        agent_infra_ref01_ent = client.AgentInfra(None)
        agent_infra_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.agent_infra"), "agent_infra_ref01"))
        agent_infra_ref01_data["agent_id"] = setup["idmap"]["agent01"]

        agent_infra_ref01_data = helpers.to_map(runner.entity_data(agent_infra_ref01_ent.create(agent_infra_ref01_data, None)))
        assert agent_infra_ref01_data is not None
        assert agent_infra_ref01_data["id"] is not None

        # LOAD
        agent_infra_ref01_match_dt0 = {
            "id": agent_infra_ref01_data["id"],
        }
        agent_infra_ref01_data_dt0_loaded = agent_infra_ref01_ent.load(agent_infra_ref01_match_dt0, None)
        agent_infra_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(agent_infra_ref01_data_dt0_loaded))
        assert agent_infra_ref01_data_dt0_load_result is not None
        assert agent_infra_ref01_data_dt0_load_result["id"] == agent_infra_ref01_data["id"]

        # REMOVE
        agent_infra_ref01_match_rm0 = {
            "id": agent_infra_ref01_data["id"],
        }
        agent_infra_ref01_ent.remove(agent_infra_ref01_match_rm0, None)



def _agent_infra_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/agent_infra/AgentInfraTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = MemesioContentCreationSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["agent_infra01", "agent_infra02", "agent_infra03", "unlock01", "unlock02", "unlock03", "agent01", "agent02", "agent03", "key01", "key02", "key03"],
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
        "MEMESIO_CONTENT_CREATION_TEST_AGENT_INFRA_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "MEMESIO_CONTENT_CREATION_TEST_AGENT_INFRA_ENTID": idmap,
        "MEMESIO_CONTENT_CREATION_TEST_LIVE": "FALSE",
        "MEMESIO_CONTENT_CREATION_TEST_EXPLAIN": "FALSE",
        "MEMESIO_CONTENT_CREATION_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("MEMESIO_CONTENT_CREATION_TEST_AGENT_INFRA_ENTID"))
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
