@restaurants.each do |restaurant|
  json.set! restaurant.id do

    json.extract! restaurant, :id, :name, :city, :cuisine, :review_averages
    json.photo_urls do
      restaurant.photos.each_with_index do |photo, i|
        json.set! "photo#{i}"
        url_for(photo)
      end

    end
    
  end  
end
      
      
      
