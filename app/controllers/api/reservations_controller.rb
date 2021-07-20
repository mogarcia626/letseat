class Api::ReservationsController < ApplicationController

    before_action :require_logged_in

    def index
      user_id = params[:user_id]
      @reservations = Reservation.find_by(user_id: user_id)
      render :index
    end

    def show
      @reservation = Reservation.find_by(id: params[:id])
      render :show
    end

    def create
        @reservation = Reservation.new(reservation_params)
        @reservation.user_id = current_user.id
        @reservation.restaurant_id = params[:restaurant_id]

        if @reservation.save
            render "api/reservations/show"
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def destroy
        @reservation = current_user.reservations.find_by(id: params[:id])
        if @reservation && @reservation.delete 
            render json: status: 200
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end
    
    private
    def reservation_params
        params.require(:reservation).permit(
            :party_size, :time, :day, :year, :id)
    end

end
