defmodule ICleanWeb.UsersController do
  use ICleanWeb, :controller

  import Ecto.Query
  alias IClean.{Repo, User}

  def index(conn, _params) do
    users = Repo.all(from u in User, select: [:email, :types, :permissions])
    json(conn, %{ users: users })
  end
end
