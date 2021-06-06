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
class Restaurant < ApplicationRecord
    validates :email, :street_address, :city, :capacity, :cuisine, presence: true
    validates :name, presence: true, uniqueness: {scope: :city, message:"This restaurant already exists in this city"}

    has_many :reservations, class_name: :Reservation, foreign_key: :restaurant_id
    belongs_to :owner, class_name: :User, foreign_key: :owner_id
    has_many :reviews, through: :reservations, source: :review
    has_one :schedule, class_name: :Schedule, foreign_key: :restaurant_id
    
    has_many_attached :photos

    def self.restaurant_filter(city = nil, cuisine = nil)
        city ? self.where("city = ? AND cuisine = ?", city, cuisine) : self.all
    end
end

Restaurant.first
