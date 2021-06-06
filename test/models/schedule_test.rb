# == Schema Information
#
# Table name: schedules
#
#  id              :bigint           not null, primary key
#  restaurant_id   :integer          not null
#  monday          :string           not null
#  tuesday         :string           not null
#  wednesday       :string           not null
#  thursday        :string           not null
#  friday          :string           not null
#  saturday        :string           not null
#  sunday          :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  monday_open     :integer
#  monday_close    :integer
#  tuesday_open    :integer
#  tuesday_close   :integer
#  wednesday_open  :integer
#  wednesday_close :integer
#  thursday_open   :integer
#  thursday_close  :integer
#  friday_open     :integer
#  friday_close    :integer
#  saturday_open   :integer
#  saturday_close  :integer
#  sunday_open     :integer
#  sunday_close    :integer
#
require 'test_helper'

class ScheduleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
