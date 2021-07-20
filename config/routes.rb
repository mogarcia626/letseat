Rails.application.routes.draw do  
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create] do 
      resources :reservations, only: [:index]
    end

    resources :restaurants, only: [:index, :show] do
      resources :reservations, only: [:create]
    end

    resources :reservations, only: [:delete, :show]
  end

end
