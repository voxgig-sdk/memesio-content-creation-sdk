# MemesioContentCreation SDK utility: make_context
require_relative '../core/context'
module MemesioContentCreationUtilities
  MakeContext = ->(ctxmap, basectx) {
    MemesioContentCreationContext.new(ctxmap, basectx)
  }
end
