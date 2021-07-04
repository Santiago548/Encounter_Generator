class CreateMonsters < ActiveRecord::Migration[6.1]
  def change
    create_table :monsters do |t|
      t.string :name
      t.string :alignment
      t.integer :challenge
      t.integer :xp
      t.string :type
      t.string :description
      t.integer :armor_class
      t.integer :health
      t.integer :speed
      t.integer :str
      t.integer :dex
      t.integer :con
      t.integer :int
      t.integer :wis
      t.integer :cha
      t.string :skill_1
      t.string :skill_2
      t.string :sense_1
      t.string :sense_2
      t.string :language_1
      t.string :language_2
      t.string :trait_1
      t.string :trait_2
      t.string :trait_3
      t.string :trait_4
      t.string :action_1
      t.string :action_2
      t.string :action_3
      t.string :action_4
      t.string :loot_1
      t.string :loot_2
      t.string :gold
      t.belongs_to :encounter, null: false, foreign_key: true

      t.timestamps
    end
  end
end
