@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.extract! restaurant, :id, :name, :email, :phone_no, :street_address, :city, 
    :description, :capacity, :cuisine, :review_averages
  end

  
end