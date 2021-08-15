Rails.application.routes.draw do  
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create]

    resources :restaurants, only: [:index, :show]

    resources :reservations, only: [:create, :delete, :show]
  end

end
