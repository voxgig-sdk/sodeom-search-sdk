# SodeomSearch SDK utility: make_context
require_relative '../core/context'
module SodeomSearchUtilities
  MakeContext = ->(ctxmap, basectx) {
    SodeomSearchContext.new(ctxmap, basectx)
  }
end
