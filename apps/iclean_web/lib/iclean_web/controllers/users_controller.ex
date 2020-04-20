defmodule ICleanWeb.UsersController do
  use ICleanWeb, :controller

  import Ecto.Query
  alias IClean.{Repo, User}

  def index(conn, _params) do
    users = Repo.all(from u in User, select: %{
      email: u.email, 
      types: u.types, 
      permissions: u.permissions
    })
    IO.inspect users
    json(conn, %{ users: users })
  end
end
