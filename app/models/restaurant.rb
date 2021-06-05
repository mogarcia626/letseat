class Restaurant < ApplicationRecord
    validates :email, :street_address, :city, :capacity, :cuisine, presence: true
    validates :name, presence: true, uniqueness: {scope: :city, message:"This restaurant has already been added"}

    has_many :reservations, class_name: :Reservation, foreign_key: :resaturant_id
    belongs_to :owner, class_name: :User, foreign_key: :owner_id
    has_many :reviews, through: :reservations, source: :review
    has_one :schedule, class_name: :Schedule, foreign_key: :resaturant_id
end
