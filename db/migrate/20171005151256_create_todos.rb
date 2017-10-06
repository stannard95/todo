class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.text :title
      t.text :body
      t.string :priority
      t.boolean :complete
      t.integer :user_id

      t.timestamps
    end
  end
end
