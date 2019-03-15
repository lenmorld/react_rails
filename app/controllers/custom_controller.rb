class CustomController < ApplicationController
    def speak
        render :json => { success: "yes!" }
    end

    def showitems
        items = Item.all
        render :json => items.to_json
    end
end