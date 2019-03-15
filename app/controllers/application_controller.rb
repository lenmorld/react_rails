class ApplicationController < ActionController::Base
    def customize
        respond_to do |format|
            format.html { @items }
            format.json { render json: json_format(@items) }
        end
    end
end
