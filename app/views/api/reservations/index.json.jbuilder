now = Date.today
nowString = Date.today.to_s(:long)
debugger
@reservations.each do |reservation|
  debugger
  json.set! reservation.id do

    json.extract! reservation, :id, :party_size,
    :time, :day, :year, :restaurant_id, :user_id
        
  end  
end
      
      
      
