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
        email: "letseatdemo+#{count}@gmail.com",
        password: '1a2b3c'
    )
    count +=1
end

# Generating Restaurants helper methods
food = Cuisine.new
def generate_double_name(cuisine_instance, cuisine_string, restaurants_array)
    len = restaurants_array.length + 1
    first = cuisine_instance.cuisines[cuisine_string][:first]
    second = cuisine_instance.cuisines[cuisine_string][:second]
    until restaurants_array.length == len
        name = "#{first[rand(first.length)]} #{second[rand(second.length)]}"
        restaurants_array << name unless restaurants_array.include?(name)
    end
    name
end

def generate_single_name(cuisine_instance, cuisine_string, restaurants_array)
    len = restaurants_array.length + 1
    first = cuisine_instance.cuisines[cuisine_string][:first]
    until restaurants_array.length == len
        name = first[rand(first.length)]
        restaurants_array << name unless restaurants_array.include?(name)
    end
    name
end

# Generates Restaurants in Orlando
food.cuisines.keys.each do |cuisine|
    15.times do
        arr = []
        Restaurant.create!(
            name: generate_double_name(food, cuisine, arr),
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
    5.times do
        arr=[]
        Restaurant.create!(
            name: generate_single_name(food, cuisine, arr),
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
food.cuisines.keys.each do |cuisine|
    15.times do
        arr=[]
        Restaurant.create!(
            name: generate_double_name(food, cuisine, arr),
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
    5.times do
        arr=[]
        Restaurant.create!(
            name: generate_single_name(food, cuisine, arr),
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
food.cuisines.keys.each do |cuisine|
    15.times do
        arr=[]
        Restaurant.create!(
            name: generate_double_name(food, cuisine, arr),
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
    5.times do
        arr=[]
        Restaurant.create!(
            name: generate_single_name(food, cuisine, arr),
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
food.cuisines.keys.each do |cuisine|
    15.times do
        arr=[]
        Restaurant.create!(
            name: generate_double_name(food, cuisine, arr),
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
    5.times do
        arr=[]
        Restaurant.create!(
            name: generate_single_name(food, cuisine, arr),
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
sched = ['Open' 'Closed']
Restaurant.all.ids.each do |rest_id|
    open = rand(8)+8
    close = rand(8)+17
    Schedule.create!(
        restaurant_id: rest_id,
        monday: sched[rand(2)],
        monday_open: open,
        monday_close:close,
        tuesday: sched[rand(2)],
        tuesday_open: open,
        tuesday_close:close,
        wednesday: sched[rand(2)],
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
        sunday: sched[rand(2)],
        sunday_open: open + rand(2),
        sunday_close: close
    )
    rest.monday_open = '' if rest.monday = 'Closed'
    rest.monday_close = '' if rest.monday = 'Closed'
    rest.tuesday_open = '' if rest.tuesday = 'Closed'
    rest.tuesday_close = '' if rest.tuesday = 'Closed'
    rest.wednesday_open = '' if rest.wednesday = 'Closed'
    rest.wednesday_close = '' if rest.wednesday = 'Closed'
    rest.sunday_open = '' if rest.sunday = 'Closed'
    rest.sunday_close = '' if rest.sunday = 'Closed'
end

#Generates some past reservations for each restaurant
Restaurant.all.each do |rest|
    open = rest.schedule.thursday_open
    diff = rest.schedule.thursday_close - open
    Reservation.create!(
        time: Time.new(2021, rand(6)+1, rand(28), rand(diff)+open),
        party_size: rand(6)+2,
        user_id: rand(20),
        restaurant_id: rest.id,
    )
end
    
#Generates a review for each reservation
Reservation.all.ids.each do |res_id|
    Review.new(
        comment: Faker::Restaurant.review,
        food_rating: rand(6),
        service_rating: rand(6),
        ambience_rating: rand(6),
        value_rating: rand(6),
        reservation_id: res_id
    )
end



