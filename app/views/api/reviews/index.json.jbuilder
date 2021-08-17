@reviews.each do |review|
  json.set! review.reservation_id do
    json.extract! review, :id, :comment, :food_rating, :value_rating,
    :service_rating, :ambience_rating, :reservation_id        
  end  
end
      
      
      
