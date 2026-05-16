# SodeomSearch SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module SodeomSearchFeatures
  def self.make_feature(name)
    case name
    when "base"
      SodeomSearchBaseFeature.new
    when "test"
      SodeomSearchTestFeature.new
    else
      SodeomSearchBaseFeature.new
    end
  end
end
