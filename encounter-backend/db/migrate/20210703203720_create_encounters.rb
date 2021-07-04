class CreateEncounters < ActiveRecord::Migration[6.1]
  def change
    create_table :encounters do |t|
      t.string :name
      t.string :difficulty
      t.integer :xp_total

      t.timestamps
    end
  end
end
