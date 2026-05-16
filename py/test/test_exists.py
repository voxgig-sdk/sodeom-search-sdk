# ProjectName SDK exists test

import pytest
from sodeomsearch_sdk import SodeomSearchSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = SodeomSearchSDK.test(None, None)
        assert testsdk is not None
