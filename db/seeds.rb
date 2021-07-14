require_relative './seed_support'
require 'faker'
require 'time'
require 'open-uri'

User.delete_all
Restaurant.delete_all
Reservation.delete_all
Review.delete_all
Schedule.delete_all

# DEV-TO-PRO!
seeding_database = 'local'  
#'local' will seed localhost from amazon-dev bucket
#'heroku' will seed heroku from amazon-prod bucket
# go to show_pag_photos.scss and search_bar.scss and change $source
# to either 'dev' or 'pro'


#Generates 1 Demo User & 5 restaurant owners that will own all seeded restaurants
#--------------------------------------------------------------------------------------------------------------------------------

demo_user = User.create!(
    email: 'letseatdemo+0@gmail.com',
    password: '1a2b3c',
    first_name: 'Guest',
    last_name: 'User'
)
count = 2
until count == 6
    User.create!(
        first_name: "Owner#{count}",
        last_name: "Example",
        email: "letseatdemo+#{count.to_s}@gmail.com",
        password: '1a2b3c'
    )
    count +=1
end

# Generating Restaurants helper methods
#--------------------------------------------------------------------------------------------------------------------------------

def generate_double_name(cuisines_hash, cuisine_string, restaurants_array)
    len = restaurants_array.length + 1
    first = cuisines_hash[cuisine_string][:first]
    second = cuisines_hash[cuisine_string][:second]
    until restaurants_array.length == len
        name = "#{first[rand(first.length)]} #{second[rand(second.length)]}"
        restaurants_array << name unless restaurants_array.include?(name)
    end
    name
end

def generate_single_name(cuisines_hash, cuisine_string, restaurants_array)
    len = restaurants_array.length + 1
    first = cuisines_hash[cuisine_string][:first]
    until restaurants_array.length == len
        name = first[rand(first.length)]
        restaurants_array << name unless restaurants_array.include?(name)
    end
    name
end

restaurants_arr = []
food = Cuisine.new.cuisines

# # Generates Restaurants in Orlando
# food.keys.each do |cuisine|
#     restaurants_arr = []
#     5.times do
#         Restaurant.create!(
#             name: generate_double_name(food, cuisine, restaurants_arr),
#             email: 'letseatdemo@gmail.com',
#             phone_no: "#{Faker::PhoneNumber.cell_phone}",
#             street_address: "#{Faker::Address.street_address} Orlando, Fl #{Faker::Address.zip}",
#             city: 'Orlando, FL',
#             description:"#{Faker::Restaurant.description}",
#             capacity: rand(45)+15,
#             cuisine: cuisine,
#             owner_id: rand(5) + 1
#         )
#     end
#     2.times do
#         Restaurant.create!(
#             name: generate_single_name(food, cuisine, restaurants_arr),
#             email: 'letseatdemo@gmail.com',
#             phone_no: "#{Faker::PhoneNumber.cell_phone}",
#             street_address: "#{Faker::Address.street_address} Orlando, Fl #{Faker::Address.zip}",
#             city: 'Orlando, FL',
#             description:"#{Faker::Restaurant.description}",
#             capacity: rand(45)+15,
#             cuisine: cuisine,
#             owner_id: rand(5) + 1
#         )
#     end
# end

    
# Generates Restaurants in San Francisco
food.keys.each do |cuisine|
    5.times do
        Restaurant.create!(
            name: generate_double_name(food, cuisine, restaurants_arr),
            email: 'letseatdemo@gmail.com',
            phone_no: "#{Faker::PhoneNumber.cell_phone}",
            street_address: "#{Faker::Address.street_address} San Francisco, CA #{Faker::Address.zip}",
            city: 'San Francisco, CA',
            description:"#{Faker::Restaurant.description}",
            capacity: rand(45)+15,
            cuisine: cuisine,
            owner_id: rand(5) + 1
        )
    end
    2.times do
        Restaurant.create!(
                name: generate_single_name(food, cuisine, restaurants_arr),
            email: 'letseatdemo@gmail.com',
            phone_no: "#{Faker::PhoneNumber.cell_phone}",
            street_address: "#{Faker::Address.street_address} San Francisco, CA #{Faker::Address.zip}",
            city: 'San Francisco, CA',
            description:"#{Faker::Restaurant.description}",
            capacity: rand(45)+15,
            cuisine: cuisine,
            owner_id: rand(5) + 1
        )
    end
end

# Generates Restaurants in New York
food.keys.each do |cuisine|
    5.times do
        Restaurant.create!(
            name: generate_double_name(food, cuisine, restaurants_arr),
            email: 'letseatdemo@gmail.com',
            phone_no: "#{Faker::PhoneNumber.cell_phone}",
            street_address: "#{Faker::Address.street_address} New York City, NY #{Faker::Address.zip}",
            city: 'New York, NY',
            description:"#{Faker::Restaurant.description}",
            capacity: rand(45)+15,
            cuisine: cuisine,
            owner_id: rand(5) + 1
        )
    end
    2.times do
        Restaurant.create!(
            name: generate_single_name(food, cuisine, restaurants_arr),
            email: 'letseatdemo@gmail.com',
            phone_no: "#{Faker::PhoneNumber.cell_phone}",
            street_address: "#{Faker::Address.street_address} New York City, NY #{Faker::Address.zip}",
            city: 'New York, NY',
            description:"#{Faker::Restaurant.description}",
            capacity: rand(45)+15,
            cuisine: cuisine,
            owner_id: rand(5) + 1
        )
    end
end

# Generates Restaurants in Austin
# food.keys.each do |cuisine|
#     5.times do
#         Restaurant.create!(
#                 name: generate_double_name(food, cuisine, restaurants_arr),
#             email: 'letseatdemo@gmail.com',
#             phone_no: "#{Faker::PhoneNumber.cell_phone}",
#             street_address: "#{Faker::Address.street_address} Austin, TX #{Faker::Address.zip}",
#             city: 'Austin, TX',
#             description:"#{Faker::Restaurant.description}",
#             capacity: rand(45)+15,
#             cuisine: cuisine,
#             owner_id: rand(5) + 1
#         )
#     end
#     2.times do
#         Restaurant.create!(
#             name: generate_single_name(food, cuisine, restaurants_arr),
#             email: 'letseatdemo@gmail.com',
#             phone_no: "#{Faker::PhoneNumber.cell_phone}",
#             street_address: "#{Faker::Address.street_address} Austin, TX #{Faker::Address.zip}",
#             city: 'Austin, TX',
#             description:"#{Faker::Restaurant.description}",
#             capacity: rand(45)+15,
#             cuisine: cuisine,
#             owner_id: rand(5) + 1
#         )
#     end
# end

# #Generates a schedule for each restaurant
# #--------------------------------------------------------------------------------------------------------------------------------

# sched = 0
# day = ['Open', 'Closed']
# open = 0
# close = 0
# count = 1

# Restaurant.all.ids.each do |rest_id|
#     open = rand(8)+8
#     close = rand(8)+17
    
#     Schedule.create!(
#         restaurant_id: rest_id,
#         monday: day[rand(2)],
#         monday_open: open,
#         monday_close:close,
#         tuesday: day[rand(2)],
#         tuesday_open: open,
#         tuesday_close:close,
#         wednesday: day[rand(2)],
#         wednesday_open: open,
#         wednesday_close:close,
#         thursday: 'Open',
#         thursday_open: open,
#         thursday_close:close,
#         friday: 'Open',
#         friday_open: open,
#         friday_close:close + rand(3),
#         saturday: 'Open',
#         saturday_open: open + rand(2),
#         saturday_close:close + rand(3),
#         sunday: day[rand(2)],
#         sunday_open: open + rand(2),
#         sunday_close: close
#         )
    
#     sched = Schedule.find_by_id(count)
#     sched.monday_open = nil if sched.monday == 'Closed'
#     sched.monday_close = nil if sched.monday == 'Closed'
#     sched.tuesday_open = nil if sched.tuesday == 'Closed'
#     sched.tuesday_close = nil if sched.tuesday == 'Closed'
#     sched.wednesday_open = nil if sched.wednesday == 'Closed'
#     sched.wednesday_close = nil if sched.wednesday == 'Closed'
#     sched.sunday_open = nil if sched.sunday == 'Closed'
#     sched.sunday_close = nil if sched.sunday == 'Closed'
#     count += 1
# end

#Generates some past reservations for each restaurant
#--------------------------------------------------------------------------------------------------------------------------------


diff = 0
Restaurant.all.ids.each do |rest|
    (rand(20)+1).times do
        # sched = Restaurant.find_by_id(rest).schedule
        # open = sched.thursday_open
        open = 12
        # diff = sched.thursday_close - open
        diff = 9
        Reservation.create!(
            time: Time.new(2021, rand(6)+1, rand(27)+1, rand(diff)+open),
            party_size: rand(6)+2,
            user_id: rand(5)+1,
            restaurant_id: rest,
        )
    end
end
    
#Generates a review for each reservation
#--------------------------------------------------------------------------------------------------------------------------------

Reservation.all.ids.each do |res_id|
    Review.create!(
        comment: Faker::Restaurant.review,
        food_rating: rand(2)+4,
        service_rating: rand(5)+1,
        ambience_rating: rand(3)+3,
        value_rating: rand(2)+4,
        reservation_id: res_id
    )
end

#Create arrays of all restaurants and cuisines
#--------------------------------------------------------------------------------------------------------------------------------

# #Orlando Restaurants by Cuisine
# orlando_thai_restaurants = Restaurant.where('city = ? AND cuisine = ?', 'Orlando, FL', 'Thai')
# orlando_chinese_restaurants = Restaurant.where('city = ? AND cuisine = ?', 'Orlando, FL', 'Chinese')
# orlando_japanese_restaurants = Restaurant.where('city = ? AND cuisine = ?', 'Orlando, FL', 'Japanese' )
# orlando_latin_restaurants = Restaurant.where('city = ? AND cuisine = ?', 'Orlando, FL', 'Seafood & Steakhouses')
# orlando_steak_restaurants = Restaurant.where('city = ? AND cuisine = ?', 'Orlando, FL', 'Latin American Cuisine')
# orlando_all_restaurants = [orlando_thai_restaurants, orlando_chinese_restaurants, orlando_japanese_restaurants, orlando_latin_restaurants, orlando_steak_restaurants]

#NY Restaurants by Cuisine
ny_thai_restaurants = Restaurant.where('city = ? AND cuisine = ?', 'New York, NY', 'Thai')
ny_chinese_restaurants = Restaurant.where('city = ? AND cuisine = ?', 'New York, NY', 'Chinese')
ny_japanese_restaurants = Restaurant.where('city = ? AND cuisine = ?', 'New York, NY', 'Japanese' )
ny_latin_restaurants = Restaurant.where('city = ? AND cuisine = ?', 'New York, NY', 'Seafood & Steakhouses')
ny_steak_restaurants = Restaurant.where('city = ? AND cuisine = ?', 'New York, NY', 'Latin American Cuisine')
ny_all_restaurants = [ny_thai_restaurants, ny_chinese_restaurants, ny_japanese_restaurants, ny_latin_restaurants, ny_steak_restaurants]

#SF Restaurants by Cuisine
sf_thai_restaurants = Restaurant.where('city = ? AND cuisine = ?', 'San Francisco, CA', 'Thai')
sf_chinese_restaurants = Restaurant.where('city = ? AND cuisine = ?', 'San Francisco, CA', 'Chinese')
sf_japanese_restaurants = Restaurant.where('city = ? AND cuisine = ?', 'San Francisco, CA', 'Japanese' )
sf_latin_restaurants = Restaurant.where('city = ? AND cuisine = ?', 'San Francisco, CA', 'Seafood & Steakhouses')
sf_steak_restaurants = Restaurant.where('city = ? AND cuisine = ?', 'San Francisco, CA', 'Latin American Cuisine')
sf_all_restaurants = [sf_thai_restaurants, sf_chinese_restaurants, sf_japanese_restaurants, sf_latin_restaurants, sf_steak_restaurants]

#Austin Restaurants by Cuisine
# austin_thai_restaurants = Restaurant.where('city = ? AND cuisine = ?', 'Austin, TX', 'Thai')
# austin_chinese_restaurants = Restaurant.where('city = ? AND cuisine = ?', 'Austin, TX', 'Chinese')
# austin_japanese_restaurants = Restaurant.where('city = ? AND cuisine = ?', 'Austin, TX', 'Japanese' )
# austin_latin_restaurants = Restaurant.where('city = ? AND cuisine = ?', 'Austin, TX', 'Seafood & Steakhouses')
# austin_steak_restaurants = Restaurant.where('city = ? AND cuisine = ?', 'Austin, TX', 'Latin American Cuisine')
# austin_all_restaurants = [austin_thai_restaurants, austin_chinese_restaurants, austin_japanese_restaurants, austin_latin_restaurants, austin_steak_restaurants]

#All Restaurants by Cuisine
all_thai_restaurants = [ny_thai_restaurants, sf_thai_restaurants] #austin_thai_restaurants, orlando_thai_restaurants,
all_chinese_restaurants = [ny_chinese_restaurants, sf_chinese_restaurants] #austin_chinese_restaurants,  orlando_chinese_restaurants,
all_japanese_restaurants = [ny_japanese_restaurants, sf_japanese_restaurants] #austin_japanese_restaurants,  orlando_japanese_restaurants, 
all_latin_restaurants =  [ny_latin_restaurants, sf_latin_restaurants] #austin_latin_restaurants, orlando_latin_restaurants,
all_steak_restaurants = [ny_steak_restaurants, sf_steak_restaurants] #austin_steak_restaurants, orlando_steak_restaurants, 

#All Restaurants by city or by cuisine
all_restaurants = [ny_all_restaurants, sf_all_restaurants] #austin_all_restaurants, orlando_all_restaurants, 
all_cuisines = [all_thai_restaurants, all_chinese_restaurants, all_japanese_restaurants, all_latin_restaurants, all_steak_restaurants]


#--------------------------------------------------------------------------------------------------------------------------------

attached = []

#________________________________________________________________
#Attach main photo to each
seatcount = 24  # 0->23

all_restaurants.each do |city|
    city.each do |cuisine|
        attached = []
        cuisine.each do |rest|
            len = attached.length + 1
            until attached.length == len
                num = rand(seatcount)
                unless attached.include?(num)
                    attached << num
                    attached = [] if attached.length == 24
                    if seeding_database == 'local'
                        s3_url = open("https://letseat-dev.s3.us-east-2.amazonaws.com/seating/seat#{num}.png")
                    elsif seeding_database == 'heroku'
                        s3_url = open("https://letseat-pro.s3.us-east-2.amazonaws.com/seating/seat#{num}.png")
                    end
                    rest.photos.attach(io: s3_url, filename: "seat#{num}.png")
                end
            end
        end
    end
end



#________________________________________________________________
# Attach thai photo
thaicount = 19 #0->18

all_thai_restaurants.each do |city|
    city.each do |restaurant|
        attached = []
        len = rand(4)+3
        until attached.length == len
            num = rand(thaicount)
            attached << num unless attached.include?(num)
        end
        attached.each do |photo_idx|
            if seeding_database == 'local'
                s3_url = open("https://letseat-dev.s3.us-east-2.amazonaws.com/thai/thai#{photo_idx}.png")
            elsif seeding_database == 'heroku'
                s3_url = open("https://letseat-pro.s3.us-east-2.amazonaws.com/thai/thai#{photo_idx}.png")
            end
            restaurant.photos.attach(io: s3_url, filename: "thai#{photo_idx}.png")
        end
    end
end

#________________________________________________________________
# Attach chinese photo
chinesecount = 14 #0->13

all_chinese_restaurants.each do |city|
    city.each do |restaurant|
        attached = []
        len = rand(4)+3
        until attached.length == len
            num = rand(chinesecount)
            attached << num unless attached.include?(num)
        end
        attached.each do |photo_idx|
            if seeding_database == 'local'
                s3_url = open("https://letseat-dev.s3.us-east-2.amazonaws.com/chinese/chinese#{photo_idx}.png")
            elsif seeding_database == 'heroku'
                s3_url = open("https://letseat-pro.s3.us-east-2.amazonaws.com/chinese/chinese#{photo_idx}.png")
            end
            restaurant.photos.attach(io: s3_url, filename: "chinese#{photo_idx}.png")
        end
    end
end
    
#________________________________________________________________
# Attach japanese photo
japanesecount = 15 #0->14

all_japanese_restaurants.each do |city|
    city.each do |restaurant|
        attached = []
        len = rand(4)+3
        until attached.length == len
            num = rand(japanesecount)
            attached << num unless attached.include?(num)
        end
        attached.each do |photo_idx|
            if seeding_database == 'local'
                s3_url = open("https://letseat-dev.s3.us-east-2.amazonaws.com/japanese/japanese#{photo_idx}.png")
            elsif seeding_database == 'heroku'
                s3_url = open("https://letseat-pro.s3.us-east-2.amazonaws.com/japanese/japanese#{photo_idx}.png")
            end
            restaurant.photos.attach(io: s3_url, filename: "japanese#{photo_idx}.png")
        end
    end
end
    
#________________________________________________________________
# Attach latin photo
latincount = 18 #0->17

all_latin_restaurants.each do |city|
    city.each do |restaurant|
        attached = []
        len = rand(4)+3
        until attached.length == len
            num = rand(latincount)
            attached << num unless attached.include?(num)
        end
        attached.each do |photo_idx|
            if seeding_database == 'local'
                s3_url = open("https://letseat-dev.s3.us-east-2.amazonaws.com/latin/latin#{photo_idx}.png")
            elsif seeding_database == 'heroku'
                s3_url = open("https://letseat-pro.s3.us-east-2.amazonaws.com/latin/latin#{photo_idx}.png")
            end
            restaurant.photos.attach(io: s3_url, filename: "latin#{photo_idx}.png")
        end
    end
end
    
#________________________________________________________________
# Attach steak photo
steakcount = 15 #0->14
    
all_steak_restaurants.each do |city|
    city.each do |restaurant|
        attached = []
        len = rand(4)+3
        until attached.length == len
            num = rand(steakcount)
            attached << num unless attached.include?(num)
        end
        attached.each do |photo_idx|
            if seeding_database == 'local'
                s3_url = open("https://letseat-dev.s3.us-east-2.amazonaws.com/steak/steak#{photo_idx}.png")
            elsif seeding_database == 'heroku'
                s3_url = open("https://letseat-pro.s3.us-east-2.amazonaws.com/steak/steak#{photo_idx}.png")
            end
            restaurant.photos.attach(io: s3_url, filename: "steak#{photo_idx}.png")
        end
    end
end




 
