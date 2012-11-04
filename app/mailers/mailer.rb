class Mailer < ActionMailer::Base
  default from: "contest@wespot.co"

  def welcome_email(contestant)
    @contestant = contestant
    @url  = "http://www.wespot.co/rules"
    @url2 = "http://www.wespot.co/phototips"
    mail(:to => contestant.email, :subject => "weSpot SF Photo Contest")
  end
end
