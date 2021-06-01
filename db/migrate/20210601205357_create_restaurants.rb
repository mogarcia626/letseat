class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :phone_no, null: false
      t.string :street_address, null: false
      t.string :city, null: false
      t.text :description
      t.integer :capacity, null: false
      t.string :cuisine, null: false
      t.integer :owner_id, null: false
      

      t.timestamps
    end

    add_index :restaurants, :name
    add_index :restaurants, :city
    add_index :restaurants, :cuisine
    add_index :restaurants, :owner_id
  end
end
