defmodule ICleanWeb.AuthController do
  use ICleanWeb, :controller

  import Ecto.Query
  alias IClean.{Repo, User}

  def sign_token(conn, params) do
    token = Phoenix.Token.sign(ICleanWeb.Endpoint, "user auth", user_id: 1)
    json(conn, %{ token: token, params: params })
  end

  def verify_token(conn, params) do
    token = get_in(params, ["token"])
    status = Phoenix.Token.verify(
      ICleanWeb.Endpoint, 
      "user auth", 
      token,
      max_age: 86400
    )

    case status do
      {:ok, user_id} ->
        json(conn, %{ verified: true , user_id: user_id })
      {:error, message} ->
        json(conn, %{verified: false, message: message})
    end
  end

  def register(conn, params) do
    %{
      "password" => password,
      "password_confirmation" => password_confirmation,
      "email" => email,
    } = params

    case String.equivalent?(password, password_confirmation) do
      true when not is_nil(email) ->
        changeset = User.changeset(%User{}, params)
        new_user = Repo.insert!(changeset)
        json(conn, new_user)
      false ->
        json(conn, %{message: "User Not Successfully Registered!"})
    end
  end

  def login(conn, params) do
    %{ "password" => password, "email" => email } = params

    user = Repo.one(
      from u in User, 
      where: u.encrypted_password == ^password and u.email == ^email
    )

    case user do
      %{ id: id } when not is_nil(id) ->
        json(conn, %{ id: user.id, email: user.email })
      nil ->
        json(conn, %{ message: "Password or User Name Invalid!" })
    end
  end

  def logout(conn, _params) do
    json(conn, %{})
  end
end
