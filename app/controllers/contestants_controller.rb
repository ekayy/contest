class ContestantsController < ApplicationController

  def new
    @contestant = Contestant.new
  end

  def create
    @contestant = Contestant.new(params[:contestant])
    if @contestant.save
      # queue a task to send a confirmation email (see below)
      # Resque.enqueue(SendConfirmationEmail, @subscription.email)
      redirect_to root_path, :notice => 'Thanks for signing up.'
    else
      render :new
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
end
