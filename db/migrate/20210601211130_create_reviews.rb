class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :comment
      t.string :filter_tags
      t.integer :food_rating, null: false
      t.integer :service_rating, null: false
      t.integer :ambience_rating, null: false
      t.integer :value_rating, null: false
      t.integer :reservation_id, null: false

      t.timestamps
    end

    add_index :reviews, :reservation_id
  end
end
