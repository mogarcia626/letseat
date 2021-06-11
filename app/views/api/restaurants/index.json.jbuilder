@restaurants.each do |restaurant|
  json.set! restaurant.id do

    json.extract! restaurant, :id, :name, :city, :cuisine, :review_averages
    json.photos do
      restaurant.photos.each_with_index do |photo, i|
        json.set! "photo#{i}" do
          url_for(photo)
        end
      end

    end

    json.photoUrls restaurant.photos.map {|photo| url_for(photo)}
    
  end  
end
      
      
      
