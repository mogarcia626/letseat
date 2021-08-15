# json.partial! "api/users/user", user: @user
json.extract! @user, :id, :email, :first_name, :last_name

json.upcoming do
  @upcoming_reservations.each do |reservation|
    json.set! reservation.id do

      json.extract! reservation, :id, :party_size,
      :time, :day, :month, :year, :restaurant_id

      restaurant = Restaurant.find_by_id(reservation.restaurant_id)
      json.name restaurant.name
      json.photoUrl url_for(restaurant.photos.first)

    end
  end  
end

json.past do
  @past_reservations.each do |reservation|
    json.set! reservation.id do

      json.extract! reservation, :id, :party_size,
      :time, :day, :month, :year, :restaurant_id

      restaurant = Restaurant.find_by_id(reservation.restaurant_id)
      json.name restaurant.name
      json.photoUrl url_for(restaurant.photos.first)

    end
  end  
end