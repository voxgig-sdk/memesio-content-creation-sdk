# MemesioContentCreation SDK utility: prepare_body
require_relative 'media'
module MemesioContentCreationUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return MemesioContentCreationUtilities.raw_body(ctx.reqdata) if MemesioContentCreationUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
