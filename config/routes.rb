Rails.application.routes.draw do

  resources :events
  resources :tasks
  root to: 'tasks#index'
end
