class User < ActiveRecord::Base

has_many :posts

validates :firstname, presence: true
validates :lastname, presence: true

validates :password, length: { in: 6..40 }

before_validation :ensure_usename_has_a_value
 
  protected
  def ensure_usename_has_a_value
    if username.nil?
      self.username = (firstname+"_"+lastname).downcase
    end
  end


end

 
