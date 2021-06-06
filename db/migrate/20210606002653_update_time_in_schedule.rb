class UpdateTimeInSchedule < ActiveRecord::Migration[5.2]
  def change
   
    remove_column :schedules, :monday_open
    remove_column :schedules, :monday_close
    remove_column :schedules, :tuesday_open
    remove_column :schedules, :tuesday_close
    remove_column :schedules, :wednesday_open
    remove_column :schedules, :wednesday_close
    remove_column :schedules, :thursday_open
    remove_column :schedules, :thursday_close
    remove_column :schedules, :friday_open
    remove_column :schedules, :friday_close
    remove_column :schedules, :saturday_open
    remove_column :schedules, :saturday_close
    remove_column :schedules, :sunday_open
    remove_column :schedules, :sunday_close

    add_column :schedules, :monday_open, :integer
    add_column :schedules, :monday_close, :integer
    add_column :schedules, :tuesday_open, :integer
    add_column :schedules, :tuesday_close, :integer
    add_column :schedules, :wednesday_open, :integer
    add_column :schedules, :wednesday_close, :integer
    add_column :schedules, :thursday_open, :integer
    add_column :schedules, :thursday_close, :integer
    add_column :schedules, :friday_open, :integer
    add_column :schedules, :friday_close, :integer
    add_column :schedules, :saturday_open, :integer
    add_column :schedules, :saturday_close, :integer
    add_column :schedules, :sunday_open, :integer
    add_column :schedules, :sunday_close, :integer

  end
end
