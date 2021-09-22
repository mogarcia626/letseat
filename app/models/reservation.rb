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
#  day           :integer
#  month         :integer
#  year          :integer
#
#  Schema Information
#
class Reservation < ApplicationRecord
    validates :time, :party_size, presence: true

    belongs_to :user, class_name: :User, foreign_key: :user_id
    belongs_to :restaurant, class_name: :Restaurant, foreign_key: :restaurant_id
    has_one :review, class_name: :Review, foreign_key: :reservation_id

    def self.upcoming_reservations(id)
        today = Date.today
        
        upcoming = self.where("user_id = ?", id)
            .where("year >= ?", today.year)
            .where("month >= ?", today.month-1)
            .where("day >= ?", today.day)
            .order("year, month, day, time")
            
        upcoming = [] unless upcoming.first
        return upcoming
    end

    def self.past_reservations(id)
        today = Date.today
        
        past = self.where("user_id = ? AND year < ? ", id, today.year)
            .or(self.where("user_id = ? AND year = ? AND month < ?", id, today.year, today.month-1)
            .or(self.where("user_id = ? AND year = ? AND month = ? AND day < ?", id, today.year, today.month-1, today.day)))
            .order("year DESC, month DESC, day DESC, time DESC")

        past = [] unless past.first
        return past
    end
    

end

