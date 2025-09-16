class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  before_validation :fill_name_from_email, if: -> { self.name.blank? && self.email.present? }

  validates :name, presence: true, length: { maximum: 100 }

  private

  def fill_name_from_email
    local = self.email.to_s.split("@", 2).first.to_s.strip
    self.name = local.presence || "User"
  end
end
