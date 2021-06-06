require_relative './seed_support'
require 'faker'
require 'time'

User.delete_all
Restaurant.delete_all
Reservation.delete_all
Review.delete_all
Schedule.delete_all

#Generates 1 Demo User & 20 restaurant owners that will own all seeded restaurants
demo_user = User.create!(
    email: 'letseatdemo+0@gmail.com',
    password: '1a2b3c',
    first_name: 'Guest',
    last_name: 'User'
)
count = 2
until count == 21
    User.create!(
        first_name: "Owner#{count}",
        last_name: "Example",
        email: "letseatdemo+#{count.to_s}@gmail.com",
        password: '1a2b3c'
    )
    count +=1
end

# Generating Restaurants helper methods

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

# Generates Restaurants in Orlando
food.keys.each do |cuisine|
    restaurants_arr = []
    2.times do
        Restaurant.create!(
            name: generate_double_name(food, cuisine, restaurants_arr),
            email: 'letseatdemo@gmail.com',
            phone_no: "#{Faker::PhoneNumber.cell_phone}",
            street_address: "#{Faker::Address.street_address} Orlando, Fl #{Faker::Address.zip}",
            city: 'Orlando',
            description:"#{Faker::Restaurant.description}",
            capacity: rand(45)+15,
            cuisine: cuisine,
            owner_id: rand(20) + 1
        )
    end
    2.times do
        Restaurant.create!(
            name: generate_single_name(food, cuisine, restaurants_arr),
            email: 'letseatdemo@gmail.com',
            phone_no: "#{Faker::PhoneNumber.cell_phone}",
            street_address: "#{Faker::Address.street_address} Orlando, Fl #{Faker::Address.zip}",
            city: 'Orlando',
            description:"#{Faker::Restaurant.description}",
            capacity: rand(45)+15,
            cuisine: cuisine,
            owner_id: rand(20) + 1
        )
    end
end

# Generates Restaurants in San Francisco
food.keys.each do |cuisine|
    2.times do
        Restaurant.create!(
            name: generate_double_name(food, cuisine, restaurants_arr),
            email: 'letseatdemo@gmail.com',
            phone_no: "#{Faker::PhoneNumber.cell_phone}",
            street_address: "#{Faker::Address.street_address} San Francisco, CA #{Faker::Address.zip}",
            city: 'San Francisco',
            description:"#{Faker::Restaurant.description}",
            capacity: rand(45)+15,
            cuisine: cuisine,
            owner_id: rand(20) + 1
        )
    end
    2.times do
        Restaurant.create!(
            name: generate_single_name(food, cuisine, restaurants_arr),
            email: 'letseatdemo@gmail.com',
            phone_no: "#{Faker::PhoneNumber.cell_phone}",
            street_address: "#{Faker::Address.street_address} San Francisco, Fl #{Faker::Address.zip}",
            city: 'San Francisco',
            description:"#{Faker::Restaurant.description}",
            capacity: rand(45)+15,
            cuisine: cuisine,
            owner_id: rand(20) + 1
        )
    end
end

# Generates Restaurants in New York
food.keys.each do |cuisine|
    2.times do
        Restaurant.create!(
            name: generate_double_name(food, cuisine, restaurants_arr),
            email: 'letseatdemo@gmail.com',
            phone_no: "#{Faker::PhoneNumber.cell_phone}",
            street_address: "#{Faker::Address.street_address} New York City, NY #{Faker::Address.zip}",
            city: 'New York City',
            description:"#{Faker::Restaurant.description}",
            capacity: rand(45)+15,
            cuisine: cuisine,
            owner_id: rand(20) + 1
        )
    end
    2.times do
        Restaurant.create!(
            name: generate_single_name(food, cuisine, restaurants_arr),
            email: 'letseatdemo@gmail.com',
            phone_no: "#{Faker::PhoneNumber.cell_phone}",
            street_address: "#{Faker::Address.street_address} New York City, NY #{Faker::Address.zip}",
            city: 'New York City',
            description:"#{Faker::Restaurant.description}",
            capacity: rand(45)+15,
            cuisine: cuisine,
            owner_id: rand(20) + 1
        )
    end
end

# Generates Restaurants in Austin
food.keys.each do |cuisine|
    2.times do
        Restaurant.create!(
            name: generate_double_name(food, cuisine, restaurants_arr),
            email: 'letseatdemo@gmail.com',
            phone_no: "#{Faker::PhoneNumber.cell_phone}",
            street_address: "#{Faker::Address.street_address} Austin, TX #{Faker::Address.zip}",
            city: 'Austin',
            description:"#{Faker::Restaurant.description}",
            capacity: rand(45)+15,
            cuisine: cuisine,
            owner_id: rand(20) + 1
        )
    end
    2.times do
        Restaurant.create!(
            name: generate_single_name(food, cuisine, restaurants_arr),
            email: 'letseatdemo@gmail.com',
            phone_no: "#{Faker::PhoneNumber.cell_phone}",
            street_address: "#{Faker::Address.street_address} Austin, TX #{Faker::Address.zip}",
            city: 'Austin',
            description:"#{Faker::Restaurant.description}",
            capacity: rand(45)+15,
            cuisine: cuisine,
            owner_id: rand(20) + 1
        )
    end
end

#Generates a schedule for each restaurant
sched = 0
day = ['Open', 'Closed']
open = 0
close = 0
count = 1

Restaurant.all.ids.each do |rest_id|
    open = rand(8)+8
    close = rand(8)+17
    
    Schedule.create!(
        restaurant_id: rest_id,
        monday: day[rand(2)],
        monday_open: open,
        monday_close:close,
        tuesday: day[rand(2)],
        tuesday_open: open,
        tuesday_close:close,
        wednesday: day[rand(2)],
        wednesday_open: open,
        wednesday_close:close,
        thursday: 'Open',
        thursday_open: open,
        thursday_close:close,
        friday: 'Open',
        friday_open: open,
        friday_close:close + rand(3),
        saturday: 'Open',
        saturday_open: open + rand(2),
        saturday_close:close + rand(3),
        sunday: day[rand(2)],
        sunday_open: open + rand(2),
        sunday_close: close
    )
    
    sched = Schedule.find_by_id(count)
    sched.monday_open = nil if sched.monday == 'Closed'
    sched.monday_close = nil if sched.monday == 'Closed'
    sched.tuesday_open = nil if sched.tuesday == 'Closed'
    sched.tuesday_close = nil if sched.tuesday == 'Closed'
    sched.wednesday_open = nil if sched.wednesday == 'Closed'
    sched.wednesday_close = nil if sched.wednesday == 'Closed'
    sched.sunday_open = nil if sched.sunday == 'Closed'
    sched.sunday_close = nil if sched.sunday == 'Closed'
    count += 1
end

#Generates some past reservations for each restaurant
diff = 0
Restaurant.all.ids.each do |rest|
    sched = Restaurant.find_by_id(rest).schedule
    open = sched.thursday_open
    diff = sched.thursday_close - open
    Reservation.create!(
        time: Time.new(2021, rand(6)+1, rand(27)+1, rand(diff)+open),
        party_size: rand(6)+2,
        user_id: rand(20)+1,
        restaurant_id: rest,
    )
end
    
#Generates a review for each reservation
Reservation.all.ids.each do |res_id|
    Review.create!(
        comment: Faker::Restaurant.review,
        food_rating: rand(6),
        service_rating: rand(6),
        ambience_rating: rand(6),
        value_rating: rand(6),
        reservation_id: res_id
    )
end



