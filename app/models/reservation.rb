class Reservation < ApplicationRecord
    validates :time, :party_size, presence: true

    belongs_to :user, class_name: :User, foreign_key: :user_id
    belongs_to :restaurant, class_name: :Restaurant, foreign_key: :restaurant_id
    has_many :review, class_name: :Review, foreign_key: :reservation_id
end
