class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
     if @user
      login(@user)
      all = Reservation.user_past_and_upcoming(@user.id)
      @past_reservations = all[:past]
      @upcoming_reservations = all[:upcoming]
      render "api/users/show"
    else
      render json: ["Invalid email/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
    else
      render json: ["Nobody signed in"], status: 404
      render json: {}, status: 404
    end
  end
end
