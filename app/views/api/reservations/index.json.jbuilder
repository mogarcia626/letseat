@upcoming_reservations.each do |reservation|
  json.set! reservation.id do

    json.extract! reservation, :id, :party_size,
    :time, :day, :month, :year, :restaurant_id, :user_id

    json.name Restaurant.find_by_id(reservation.restaurant_id).name
    
  end
end  