-- SodeomSearch SDK exists test

local sdk = require("sodeom-search_sdk")

describe("SodeomSearchSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
