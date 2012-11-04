class AddRestaurantToContestant < ActiveRecord::Migration
  def change
  	add_column :contestants, :restaurant, :string

  end
end
