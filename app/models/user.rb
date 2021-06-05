class User < ApplicationRecord    
  attr_reader :password

  validates :first_name, :last_name, :password_digest, presence: true
  validates :email, :session_token, uniqueness: true, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

   has_many :reservations, class_name: :Reservation, foreign_key: :user_id
   has_many :restaurants, class_name: :Restaurant, foreign_key: :owner_id
   has_many :reviews, through: :reservations, source: :review

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    return nil unless user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64(64)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.base64(64)
  end

end
