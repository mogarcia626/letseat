
json.restaurant do
  json.extract! @restaurant, :id, :name, :email, :phone_no, :street_address, :city, 
    :description, :capacity, :cuisine, :review_averages
  json.photoUrls @restaurant.photos.map {|photo| url_for(photo)}
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