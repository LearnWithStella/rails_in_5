Rails.application.routes.draw do

  resources :goals
  resources :milestones
  resources :events
  resources :tasks
  root to: 'tasks#index'
end
