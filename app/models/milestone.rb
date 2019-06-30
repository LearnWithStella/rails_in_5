class Milestone < ApplicationRecord
  belongs_to :event
  has_many :goals
end
