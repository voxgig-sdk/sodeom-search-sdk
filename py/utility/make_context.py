# SodeomSearch SDK utility: make_context

from core.context import SodeomSearchContext


def make_context_util(ctxmap, basectx):
    return SodeomSearchContext(ctxmap, basectx)
