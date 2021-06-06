# == Schema Information
#
# Table name: reviews
#
#  id              :bigint           not null, primary key
#  comment         :text
#  food_rating     :integer          not null
#  service_rating  :integer          not null
#  ambience_rating :integer          not null
#  value_rating    :integer          not null
#  reservation_id  :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
