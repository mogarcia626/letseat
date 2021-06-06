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
class Review < ApplicationRecord
    validates :food_rating, :service_rating, :ambience_rating, :value_rating, null: false

    belongs_to :reservation, class_name: :Reservation, foreign_key: :reservation_id
    has_one :user, through: :reservation, source: :user
    has_one :restaurant, through: :reservation, source: :restaurant
end
