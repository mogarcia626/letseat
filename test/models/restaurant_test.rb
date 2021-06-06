# == Schema Information
#
# Table name: restaurants
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  email          :string           not null
#  phone_no       :string           not null
#  street_address :string           not null
#  city           :string           not null
#  description    :text
#  capacity       :integer          not null
#  cuisine        :string           not null
#  owner_id       :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
