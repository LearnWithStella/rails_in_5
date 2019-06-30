class Goal < ApplicationRecord
  belongs_to :milestone
  has_many :tasks

  validates :name, presence: true
end
