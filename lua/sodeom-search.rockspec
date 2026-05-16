package = "voxgig-sdk-sodeom-search"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/sodeom-search-sdk.git"
}
description = {
  summary = "SodeomSearch SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["sodeom-search_sdk"] = "sodeom-search_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
