class User < ApplicationRecord
  has_many :dogs
  
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }, presence: true
end
