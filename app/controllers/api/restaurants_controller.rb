class Api::RestaurantsController < ApplicationController
    # before_action :require_logged_in, only: [:create]

    def index
      city = params[:filter][:city]
      cuisine = params[:filter][:cuisine]
      @restaurants = Restaurant.apply_filter(city, cuisine)
      render json: @restaurants
    end

    def show
        @restaurant = Restaurant.find_by(id: id)
        render json: @restaurant
    end

    # def new
    # end

    # def create
    # end

    # def edit
    # end

    # def update
    # end

    # def destroy
    # end

    private
        def restaurant_params
            params.require(:restaurant).permit(
                :name, :email, :phone_no, 
                :street_address, :city,
                :description, :capacity, :cuisine)
        end

        def filter
          params[:filter]
        end
end