-- SodeomSearch SDK error

local SodeomSearchError = {}
SodeomSearchError.__index = SodeomSearchError


function SodeomSearchError.new(code, msg, ctx)
  local self = setmetatable({}, SodeomSearchError)
  self.is_sdk_error = true
  self.sdk = "SodeomSearch"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function SodeomSearchError:error()
  return self.msg
end


function SodeomSearchError:__tostring()
  return self.msg
end


return SodeomSearchError
