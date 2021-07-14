Rails.application.routes.draw do  
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do

    resource :session, only: [:create, :destroy]

    resources :users, only: [:create] #do 
    #   resources :restaurants, only: [:create, :update]
    # end

    resources :restaurants, only: [:index, :show]
  end
end
