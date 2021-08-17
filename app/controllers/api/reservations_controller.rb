class Api::ReservationsController < ApplicationController

    before_action :require_logged_in

    def index
        if params[:status] == 'upcoming'
            @upcoming_reservations = Reservation.upcoming_reservations(current_user.id)
        elsif params[:status] == 'past'
            @past_reservations = Reservation.past_reservations(current_user.id)
        else
            @upcoming_reservations = Reservation.upcoming_reservations(current_user.id)
            @past_reservations = Reservation.past_reservations(current_user.id)
        end
        render "api/reservations/index"
    end

    def create
        reservation = Reservation.new(reservation_params)
        reservation.user_id = current_user.id
        if reservation.save
            @upcoming_reservations = Reservation.upcoming_reservations(current_user.id)
            render "api/reservations/index"
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def destroy
        reservation = current_user.reservations.find_by(id: params[:id])
        if reservation && reservation.delete
            @upcoming_reservations = Reservation.upcoming_reservations(current_user.id)
            render "api/reservations/index"
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def edit
        reservation = current_user.reservations.find_by(id: params[:id])
        if reservation.update(reservation_params)
            @upcoming_reservations = Reservation.upcoming_reservations(current_user.id)
            render "api/reservations/index"
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end
    
    private
    def reservation_params
        params.require(:reservation).permit(
            :party_size, :time, :day, :month, :year, :user_id, :restaurant_id)
    end

end
