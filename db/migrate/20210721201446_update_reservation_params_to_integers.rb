class UpdateReservationParamsToIntegers < ActiveRecord::Migration[5.2]
  def change

    remove_column :reservations, :day
    remove_column :reservations, :year

    add_column :reservations, :day, :integer
    add_column :reservations, :month, :integer
    add_column :reservations, :year, :integer
  end
end
