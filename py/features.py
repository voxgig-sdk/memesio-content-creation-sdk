# MemesioContentCreation SDK feature factory

from feature.base_feature import MemesioContentCreationBaseFeature
from feature.test_feature import MemesioContentCreationTestFeature


def _make_feature(name):
    features = {
        "base": lambda: MemesioContentCreationBaseFeature(),
        "test": lambda: MemesioContentCreationTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
