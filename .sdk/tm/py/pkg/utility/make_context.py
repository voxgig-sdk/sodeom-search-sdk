# SodeomSearch SDK utility: make_context

from projectname_sdk.core.context import SodeomSearchContext


def make_context_util(ctxmap, basectx):
    return SodeomSearchContext(ctxmap, basectx)
