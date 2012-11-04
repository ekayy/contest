class DropSomeFields < ActiveRecord::Migration
  def change
  	remove_column :contestants, :first_name
  	remove_column :contestants, :last_name
  	remove_column :contestants, :phone
  	add_column :contestants, :name, :string
  end
end
