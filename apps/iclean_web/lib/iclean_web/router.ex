defmodule ICleanWeb.Router do
  use ICleanWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug :fetch_session
    #plug :protect_from_forgery
    #plug :put_secure_browser_headers
  end

  scope "/api", ICleanWeb do
    pipe_through :api

    scope "/auth" do
      get "/sign_token", AuthController, :sign_token
      get "/verify_token", AuthController, :verify_token
    end

    resources "/users", UsersController, except: [:new, :edit]

    resources "/profile", ProfileController do
      get "/personal_info/:user_id", ProfileController, :personal_info
    end
  end
end
