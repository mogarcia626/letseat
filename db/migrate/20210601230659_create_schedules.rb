class CreateSchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :schedules do |t|
      t.integer :restaurant_id, null:false
      t.string :monday, null: false
      t.time :monday_open
      t.time :monday_close
      t.string :tuesday, null: false
      t.time :tuesday_open
      t.time :tuesday_close
      t.string :wednesday, null: false
      t.time :wednesday_open
      t.time :wednesday_close
      t.string :thursday, null: false
      t.time :thursday_open
      t.time :thursday_close
      t.string :friday, null: false
      t.time :friday_open
      t.time :friday_close
      t.string :saturday, null: false
      t.time :saturday_open
      t.time :saturday_close
      t.string :sunday, null: false
      t.time :sunday_open
      t.time :sunday_close

      t.timestamps
    end

    add_index :schedules, :restaurant_id
  end
end
