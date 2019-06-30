class CreateGoals < ActiveRecord::Migration[5.0]
  def change
    create_table :goals do |t|
      t.string :name
      t.string :description
      t.datetime :start_time
      t.datetime :end_time

      t.timestamps
    end
  end
end
