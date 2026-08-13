# SodeomSearch SDK feature factory

from sodeomsearch_sdk.feature.base_feature import SodeomSearchBaseFeature
from sodeomsearch_sdk.feature.test_feature import SodeomSearchTestFeature


def _make_feature(name):
    features = {
        "base": lambda: SodeomSearchBaseFeature(),
        "test": lambda: SodeomSearchTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
