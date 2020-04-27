defmodule ICleanWeb.Router do
  use ICleanWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug ICleanWeb.APIAuthPlug, otp_app: :my_app
  end

  pipeline :api_protected do
    plug Pow.Plug.RequireAuthenticated, error_handler: ICleanWeb.APIAuthErrorHandler
  end

  scope "/api", ICleanWeb do
    pipe_through :api

    resources "/registration", RegistrationController, singleton: true, only: [:create]
    resources "/session", SessionController, singleton: true, only: [:create, :delete]
    post "/session/renew", SessionController, :renew

    scope "/auth" do
      get "/sign_token", AuthController, :sign_token
      get "/verify_token", AuthController, :verify_token
    end

    resources "/users", UsersController, except: [:new, :edit]

    resources "/profile", ProfileController do
      get "/personal_info/:user_id", ProfileController, :personal_info
    end
  end

  scope "/api", ICleanWeb do
    pipe_through [:api, :api_protected]

    # Your protected API endpoints here
  end
end
