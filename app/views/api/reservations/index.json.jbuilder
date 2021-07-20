@reservations.each do |reservation|
  json.set! reservation.id do

    json.extract! reservation, :id, :party_size, :restaurant_id,
    :time, :day, :year
        
  end  
end
      
      
      
