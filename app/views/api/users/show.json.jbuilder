# json.partial! "api/users/user", user: @user
json.extract! @user, :id, :email, :first_name, :last_name

json.upcoming do
  @upcoming_reservations.each do |reservation|
    json.set! reservation.id do

      json.extract! reservation, :party_size,
      :time, :day, :month, :year, :restaurant_id

      json.name Restaurant.find_by_id(reservation.restaurant_id).name

    end
  end  
end

json.past do
  @past_reservations.each do |reservation|
    json.set! reservation.id do

      json.extract! reservation, :party_size,
      :time, :day, :month, :year, :restaurant_id

      json.name Restaurant.find_by_id(reservation.restaurant_id).name

    end
  end  
end