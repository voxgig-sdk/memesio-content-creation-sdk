# MemesioContentCreation SDK exists test

require "minitest/autorun"
require_relative "../MemesioContentCreation_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = MemesioContentCreationSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
