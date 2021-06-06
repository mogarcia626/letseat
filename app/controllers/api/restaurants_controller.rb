class Api::RestaurantsController < ApplicationController

    # before_action :require_logged_in, only: [:create]

    def index
        @restaurants = Restaurant.city_filter(city, cuisine)
        render json: @restaurants
    end

    def show
        @restaurant = Restaurant.find_by(id: id)
        render json: @restaurant

    end

    # def create
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

        def city
            params[:city]
        end
                
        def cuisine
          params[:cuisine]
        end
end


  

  def index
    benches = bounds ? Bench.in_bounds(bounds) : Bench.all

    if params[:minSeating] && params[:maxSeating]
      benches = benches.where(seating: seating_range)
    end

    @benches = benches.includes(:reviews, :favorite_users)
    render :index
  end

  def show
    @bench = Bench.find(params[:id])
  end

  def create
    @bench = Bench.create!(bench_params)
    render :show
  end

  private

  def seating_range
    (params[:minSeating]..params[:maxSeating])
  end

  def bench_params
    params.require(:bench).permit(
      :lat,
      :lng,
      :description,
      :seating,
      :photo
    )
  end


