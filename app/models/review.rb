class Review < ApplicationRecord
    validates :star_ratings, 

    belongs_to :reservation, class_name: :Reservation, foreign_key: :reservation_id
    belongs_to :user, through: :reservation, source: :user
    belongs_to :restaurant, through: :reservation, source: :restaurant
end
