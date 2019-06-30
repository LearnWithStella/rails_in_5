class Goal < ApplicationRecord
  belongs_to :milestone
  has_many :tasks
end
