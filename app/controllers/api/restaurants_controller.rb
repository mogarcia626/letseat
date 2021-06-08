class Api::RestaurantsController < ApplicationController
    # before_action :require_logged_in, only: [:create]

    def index
      city = params[:filters][:city]
      cuisine = params[:filters][:cuisine]
      restaurants = Restaurant.apply_filters(city, cuisine)
      @restaurants = restaurants.includes(:reviews)
      render :index
    end

    def show
        @restaurant = Restaurant.find_by(id: id)
        render :show
    end
    
    private
        def restaurant_params
            params.require(:restaurant).permit(
                :name, :email, :phone_no, 
                :street_address, :city,
                :description, :capacity, :cuisine)
        end

        def filters
          params[:filters]
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
end