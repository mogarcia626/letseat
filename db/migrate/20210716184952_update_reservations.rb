class UpdateReservations < ActiveRecord::Migration[5.2]
  def change
    
    remove_column :reservations, :time
    add_column :reservations, :time, :string
    add_column :reservations, :day, :string
    add_column :reservations, :year, :string

  end
end
