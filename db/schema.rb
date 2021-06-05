# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_05_041812) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "reservations", force: :cascade do |t|
    t.datetime "time", null: false
    t.integer "party_size", null: false
    t.integer "user_id", null: false
    t.integer "restaurant_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id"], name: "index_reservations_on_restaurant_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "phone_no", null: false
    t.string "street_address", null: false
    t.string "city", null: false
    t.text "description"
    t.integer "capacity", null: false
    t.string "cuisine", null: false
    t.integer "owner_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["city"], name: "index_restaurants_on_city"
    t.index ["cuisine"], name: "index_restaurants_on_cuisine"
    t.index ["name"], name: "index_restaurants_on_name"
    t.index ["owner_id"], name: "index_restaurants_on_owner_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.text "comment"
    t.string "filter_tags"
    t.integer "food_rating", null: false
    t.integer "service_rating", null: false
    t.integer "ambience_rating", null: false
    t.integer "value_rating", null: false
    t.integer "reservation_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["reservation_id"], name: "index_reviews_on_reservation_id"
  end

  create_table "schedules", force: :cascade do |t|
    t.integer "restaurant_id", null: false
    t.string "monday", null: false
    t.time "monday_open"
    t.time "monday_close"
    t.string "tuesday", null: false
    t.time "tuesday_open"
    t.time "tuesday_close"
    t.string "wednesday", null: false
    t.time "wednesday_open"
    t.time "wednesday_close"
    t.string "thursday", null: false
    t.time "thursday_open"
    t.time "thursday_close"
    t.string "friday", null: false
    t.time "friday_open"
    t.time "friday_close"
    t.string "saturday", null: false
    t.time "saturday_open"
    t.time "saturday_close"
    t.string "sunday", null: false
    t.time "sunday_open"
    t.time "sunday_close"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id"], name: "index_schedules_on_restaurant_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
