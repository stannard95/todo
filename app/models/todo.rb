class Todo < ApplicationRecord
	belongs_to :user

	validates :body, numericality: { greater_than: 1, less_than: 5000, 
	message: "Yo, your message is wrong" }
end
