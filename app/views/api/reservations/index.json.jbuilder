json.upcoming do
  @upcoming_reservations.each do |reservation|
    # debugger
    json.set! reservation.id do
      json.extract! reservation, :id, :party_size,
      :time, :day, :month, :year, :restaurant_id, :user_id
    end
  end  
end

json.past do
  @past_reservations.each do |reservation|
    # debugger
    json.set! reservation.id do
      json.extract! reservation, :id, :party_size,
      :time, :day, :month, :year, :restaurant_id, :user_id
    end
  end  
end
      
      
      
