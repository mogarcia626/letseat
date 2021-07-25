require 'date'

json.restaurant do
  json.extract! @restaurant, :id, :name, :email, :phone_no, :street_address, :city, 
    :description, :capacity, :cuisine, :review_averages

  json.schedule do
    json.extract! @schedule, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday, 
    :monday_open, :monday_close, :tuesday_open, :tuesday_close, :wednesday_open, :wednesday_close, :thursday_open, :thursday_close,
    :friday_open, :friday_close, :saturday_open, :saturday_close, :sunday_open, :sunday_close
  end
  
  json.photoUrls @restaurant.photos.map {|photo| url_for(photo)}
end

json.reviews do
  @reviews.each do |review|    
    json.set! review.id do
      json.extract! review, :comment, :food_rating, :service_rating,
      :ambience_rating, :value_rating, :reservation_id
      json.createdAt review.created_at.strftime("%a, %d %b %Y")
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