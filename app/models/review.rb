class Review < ApplicationRecord
    # validates :star_ratings, 

    belongs_to :reservation, class_name: :Reservation, foreign_key: :reservation_id
    has_one :user, through: :reservation, source: :user
    has_one :restaurant, through: :reservation, source: :restaurant
end
