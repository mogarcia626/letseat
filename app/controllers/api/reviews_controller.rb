class Api::ReviewsController < ApplicationController
    # before_action :require_logged_in

        # def show
        
    # end

    # def post
        
    # end

    # def delete
        
    # end

    # def update
        
    # end

    private

    def review_params
    params.require(:review).permit(:rating, :body, :bench_id)
    end
end
