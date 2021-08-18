class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, :underscore_params!

    def index
      @reviews = User.find_by(id: current_user.id).reviews
      render "api/reviews/index"
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render "api/reviews/show"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def delete
        @review = current_user.reviews.find_by(id: params[:id])
        if @review
            @review.delete
        else
            render json: @review.errors.full_messages, status: 422
        end
        
    end

    def update
        @review = current_user.reviews.find_by(id: params[:id])
        if @review.update(review_params)
            render "api/reviews/show"
        else
            render json: @review.errors.full_messages, status: 422
        end        
    end

    # def show
        
    # end

    private

    def review_params
        params.require(:review).permit(:reservation_id, :food_rating,
            :service_rating, :ambience_rating, :value_rating, :comment)
    end
end
