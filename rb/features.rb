# MemesioContentCreation SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module MemesioContentCreationFeatures
  def self.make_feature(name)
    case name
    when "base"
      MemesioContentCreationBaseFeature.new
    when "ratelimit"
      MemesioContentCreationRatelimitFeature.new
    when "retry"
      MemesioContentCreationRetryFeature.new
    when "test"
      MemesioContentCreationTestFeature.new
    when "timeout"
      MemesioContentCreationTimeoutFeature.new
    else
      MemesioContentCreationBaseFeature.new
    end
  end
end
