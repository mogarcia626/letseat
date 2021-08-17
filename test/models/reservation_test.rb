# == Schema Information
#
# Table name: reservations
#
#  id            :bigint           not null, primary key
#  party_size    :integer          not null
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  time          :string
#  day           :integer
#  month         :integer
#  year          :integer
#
require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
