# ProjectName SDK exists test

import pytest
from memesiocontentcreation_sdk import MemesioContentCreationSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = MemesioContentCreationSDK.test(None, None)
        assert testsdk is not None
