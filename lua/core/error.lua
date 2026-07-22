-- MemesioContentCreation SDK error

local MemesioContentCreationError = {}
MemesioContentCreationError.__index = MemesioContentCreationError


function MemesioContentCreationError.new(code, msg, ctx)
  local self = setmetatable({}, MemesioContentCreationError)
  self.is_sdk_error = true
  self.sdk = "MemesioContentCreation"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function MemesioContentCreationError:error()
  return self.msg
end


function MemesioContentCreationError:__tostring()
  return self.msg
end


return MemesioContentCreationError
