class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|

t.string :username
t.string :password
t.text :post

      t.timestamps
    end
  end
end
