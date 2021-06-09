json.restaurants do
  json.extract! @restaurant, :id, :name, :email, :phone_no, :street_address, :city, 
  :description, :capacity, :cuisine, :review_averages
  json.review @restaurant.review_averages
end


json.reviews do
  @reviews.each do |review|    
    json.set! review.id do

      json.extract! review, :id, :comment, :food_rating, :service_rating,
      :ambience_rating, :value_rating, :reservation_id

      json.user review.user
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