# MemesioContentCreation SDK utility: make_context

from core.context import MemesioContentCreationContext


def make_context_util(ctxmap, basectx):
    return MemesioContentCreationContext(ctxmap, basectx)
