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
        food, service, ambience, val = [0,0], [0,0], [0,0], [0,0]
        
        self.reviews.each do |rev|
            food[0], food[1] = food[0] + rev.food_rating, food[1] + 1
            service[0], service[1] = service[0] + rev.service_rating, service[1] + 1
            ambience[0], ambience[1] = ambience[0] + rev.ambience_rating, ambience[1] + 1
            val[0], val[1] = val[0] + rev.value_rating, val[1] + 1
        end

            food, service = food[0] / food[1], service[0] / service[1]
            ambience, val = ambience[0] / ambience[1], val[0] / val[1]
            average = (food + service + ambience + val) / 4
            
            return {
                average: average,
                food: food,
                service: service,
                ambience: ambience,
                value: val,
                count: self.reviews.length
            }
    end
    
end
