
json.restaurant do
  json.extract! @restaurant, :id, :name, :email, :phone_no, :street_address, :city, 
    :description, :capacity, :cuisine, :photos, :review_averages
  @restaurant.photos.each_with_index do |photo, i|
        json.set! "photo#{i}"
        url_for(photo)
  end
end

json.reviews do
  @reviews.each do |review|    
    json.set! review.id do
      json.extract! review, :comment, :food_rating, :service_rating,
      :ambience_rating, :value_rating, :reservation_id
      json.reviewer do
        json.extract! review.reviewer, :id, :first_name, :last_name 
      end
    end  
  end  
end  







  
    


# { restaurant: 'data'
#   reviews: {
#     [id]: { 
#       review: review_contet],
#       user: [user_content]
#       }
#     }
# }