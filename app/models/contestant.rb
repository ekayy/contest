class Contestant < ActiveRecord::Base
  attr_accessible :email, :first_name, :last_name, :phone, :restaurant, :terms

  validates_acceptance_of :terms, :on => :create, :allow_nil => false, :message => "not accepted"
  validates_presence_of :email
  validates_presence_of :restaurant
end
