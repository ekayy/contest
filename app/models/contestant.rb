class Contestant < ActiveRecord::Base
  attr_accessible :email, :name, :restaurant, :terms

  validates_acceptance_of :terms, :on => :create, :allow_nil => false
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }
  validates_presence_of :restaurant
end
