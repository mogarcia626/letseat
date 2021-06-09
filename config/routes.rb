Rails.application.routes.draw do
  
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] #do 
    #   resources :restaurants, only: [:create, :show, :update]
    # end
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :show]
  end
end
