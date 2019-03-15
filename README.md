commands used:

https://gorails.com/setup/ubuntu/16.04

```
 3953  rails new react_app -d postgresql
 3954  cd react_app
 3955  rake db:create
 3956  rails g scaffold Item name:string description:text
 3957  rake db:migrate
 3959  rails s -p 4000
 3964  npm init -y
 3982  npm run dev
```

PSQL quick start:
https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb


# 1_Scaffold

- Rails 5.2
- postgresql
- Item scaffold : localhost:4000/items

# 2_serve static HTML

- http://davidpots.com/rails/tutorial/development/2013/03/19/rails-basics-setting-up-a-homepage.html
  
# 3_React

- NOTE: not using asset pipeline, but just serving public/
- `production.rb` : `config.public_file_server.enabled = true`
- webpack.config.json: nothing fancy just can't use path like in Node
- attaching webpacked `bundle.js` in `react.rhtml.erb`

TODO: try later: Rails Asset Pipeline
> The asset pipeline provides a framework to concatenate and minify or compress JavaScript and CSS assets. 
> https://guides.rubyonrails.org/asset_pipeline.html

react-rails Gem uses the asset/ folder
> https://www.pluralsight.com/guides/building-a-crud-interface-with-react-and-ruby-on-rails

# 4_React_with_RAILS_API

- `items_controller.rb` already has routes for HTML view and JSON returns

# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
