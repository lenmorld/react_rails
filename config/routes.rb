Rails.application.routes.draw do
  resources :items
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'pages#home'   # view: home.html.erb, controller: pages_controller.rb

  get '/react', to: 'pages#react'

  # CustomController::speak
  # get '/customize', controller: 'custom', action: 'speak'
  # SAME WITH
  get '/customize', to: 'custom#speak'

  get '/showitems', to: 'custom#showitems'

  # root 'home#index'
end
