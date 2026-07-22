# MemesioContentCreation SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module MemesioContentCreationFeatures
  def self.make_feature(name)
    case name
    when "base"
      MemesioContentCreationBaseFeature.new
    when "test"
      MemesioContentCreationTestFeature.new
    else
      MemesioContentCreationBaseFeature.new
    end
  end
end
