# SodeomSearch SDK feature factory

from sodeomsearch_sdk.feature.base_feature import SodeomSearchBaseFeature
from sodeomsearch_sdk.feature.ratelimit_feature import SodeomSearchRatelimitFeature
from sodeomsearch_sdk.feature.retry_feature import SodeomSearchRetryFeature
from sodeomsearch_sdk.feature.test_feature import SodeomSearchTestFeature
from sodeomsearch_sdk.feature.timeout_feature import SodeomSearchTimeoutFeature


_FEATURES = {
    "base": lambda: SodeomSearchBaseFeature(),
    "ratelimit": lambda: SodeomSearchRatelimitFeature(),
    "retry": lambda: SodeomSearchRetryFeature(),
    "test": lambda: SodeomSearchTestFeature(),
    "timeout": lambda: SodeomSearchTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
