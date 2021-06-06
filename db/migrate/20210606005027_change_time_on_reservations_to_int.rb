class ChangeTimeOnReservationsToInt < ActiveRecord::Migration[5.2]
  def change

    remove_column :reservations, :time
    add_column :reservations, :time, :integer

  end
end
