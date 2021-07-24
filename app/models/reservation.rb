#  Schema Information
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

    def self.parse_past_and_upcoming(ids)
        today = Date.today
        key = ids.keys[0]
        id = ids.values[0].to_i
        upcoming = self.where("#{key}_id = ?", id)
            .where("year >= ? AND month >= ? AND day >= ?", today.year, today.month-1, today.day)
            .order("year, month, day")

        past = self.where("#{key}_id = ?", id)
            .where("year < ? ", today.year)
            .or(self.where("year = ? AND month < ?", today.year, today.month-1)
            .or(self.where("year = ? AND month = ? AND day < ?", today.year, today.month-1, today.day)))
            .order("year DESC, month DESC, day DESC")
        upcoming = [] unless upcoming.first
        past = [] unless past.first
        {past: past, upcoming: upcoming}
    end
    

    # def parse_date

    # end
end
