class AddEventIdToTasks < ActiveRecord::Migration[5.0]
  def change
    add_column :tasks, :event_id, :integer
  end
end
