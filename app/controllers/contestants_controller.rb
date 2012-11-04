class ContestantsController < ApplicationController

  def new
    @contestant = Contestant.new
  end

  def create
    @contestant = Contestant.new(params[:contestant])

      # queue a task to send a confirmation email (see below)
      # Resque.enqueue(SendConfirmationEmail, @subscription.email)
      respond_to do |format|
        if @contestant.save
          # Tell the UserMailer to send a welcome Email after save
          Mailer.welcome_email(@contestant).deliver
   
          format.html { redirect_to(@contestant, :notice => 'Thanks for signing up.') }
          format.json { render :json => @contestant, :status => :created, :location => @contestant }
        else
          format.html { render :action => "new" }
          format.json { render :json => @contestant.errors, :status => :unprocessable_entity }
        end
      end
  end

  def map
  end

  def rules
  end

  def terms
  end

  def list
  end
  
  def about
  end

  def phototips
  end

  def show
  end

end
