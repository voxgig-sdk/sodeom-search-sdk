# SodeomSearch SDK feature factory

from feature.base_feature import SodeomSearchBaseFeature
from feature.test_feature import SodeomSearchTestFeature


def _make_feature(name):
    features = {
        "base": lambda: SodeomSearchBaseFeature(),
        "test": lambda: SodeomSearchTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
