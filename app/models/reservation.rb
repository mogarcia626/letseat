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
#  time          :string
#  day           :string
#  year          :string
#
class Reservation < ApplicationRecord
    validates :time, :party_size, presence: true

    belongs_to :user, class_name: :User, foreign_key: :user_id
    belongs_to :restaurant, class_name: :Restaurant, foreign_key: :restaurant_id
    has_many :review, class_name: :Review, foreign_key: :reservation_id

    # def self.parse_past_and_upcoming(ids)
    #     now = DateTime.now
    #     reservations = []
    #     upcoming = []
    #     past = []

    #     if ids[:user]
    #         user_id = ids[:user].to_i
    #         reservations = self.("user_id = ?", user_id)
    #             .order("year, day, time")
    #     elsif ids[:restaurant]
    #         restaruant_id = ids[:restaruant].to_i
    #         reservations = self.("restaurant_id = ?", restaurant_id)
    #             .order("year, day, time")
    #     end
        
            
    #         reservations.each do |reservation|
    #         if reservation.year.to_i < now.year || reservation
    #     end
    # end

    # def parse_date

    # end
end
