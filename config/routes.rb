Rails.application.routes.draw do  
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create, :show]

    resources :restaurants, only: [:index, :show]

    resources :reservations, only: [:index, :create, :destory, :update]

    resources :reviews, only: [:create, :destory, :update, :index]
  end

end
