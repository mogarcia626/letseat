class UsersRemovePhoneNo < ActiveRecord::Migration[5.2]
  def change

    remove_column :users, :phone_no
  end
end
