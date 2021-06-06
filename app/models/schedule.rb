class Schedule < ApplicationRecord
    validates :monday, :tuesday, :wednesday, presence: true, inclusion: {in: %w(open closed 24/7)}
    validates :thursday, :friday, presence: true, inclusion: {in: %w(Open Closed 24/7)}
    validates :saturday, :sunday, presence: true, inclusion: {in: %w(Open Closed 24/7)}

    belongs_to :restaurant, class_name: :Restaurant, foreign_key: :resaturant_id
end
