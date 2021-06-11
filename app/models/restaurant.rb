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

    has_many :reservations, class_name: :Reservation, foreign_key: :restaurant_id, dependent: :destroy
    belongs_to :owner, class_name: :User, foreign_key: :owner_id
    has_many :reviews, through: :reservations, source: :review
    has_many :reviewers, through: :reviews, source: :user
    has_one :schedule, class_name: :Schedule, foreign_key: :restaurant_id, dependent: :destroy
    
    has_many_attached :photos

    attr_reader :review_averages,

    def self.apply_filters(city, cuisine)
        if city=='' && cuisine==''
            self.all
        elsif city=='' && cuisine
            self.where("cuisine = ?", cuisine)
        elsif cuisine=='' && city
            self.where("city = ?", city)
        else
            self.where("city = ? AND cuisine = ?", city, cuisine)
        end
    end

    def review_averages
        food, service, ambience, val = 0, 0, 0, 0
        #[rating, count]
        self.reviews.each do |rev|
            food += rev.food_rating
            service += rev.service_rating
            ambience += rev.ambience_rating
            val += rev.value_rating
        end
            count = reviews.length
            food, service = food/count, service/count
            ambience, val = ambience/count, val/count
            average = (food + service + ambience + val)/4.0
            
            return {
                average: average,
                food: food,
                service: service,
                ambience: ambience,
                value: val,
                count: count
            }
    end
    
end
