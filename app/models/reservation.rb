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
#  time          :integer
#
class Reservation < ApplicationRecord
    validates :time, :party_size, presence: true

    belongs_to :user, class_name: :User, foreign_key: :user_id
    belongs_to :restaurant, class_name: :Restaurant, foreign_key: :restaurant_id
    has_many :review, class_name: :Review, foreign_key: :reservation_id
end
