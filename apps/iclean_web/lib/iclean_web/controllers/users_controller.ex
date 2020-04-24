defmodule ICleanWeb.UsersController do
  use ICleanWeb, :controller

  import Ecto.Query
  alias IClean.{Repo, User}

  def index(conn, _params) do
    users = Repo.all(from u in User, select: %{
      id: u.id,
      email: u.email, 
      types: u.types, 
      permissions: u.permissions,
      active: u.active,
    })

    json(conn, %{ 
      users: users, 
      types: User.types,
      permissions: User.permissions,
    })
  end

  def update(conn, params) do
    update = User
      |> Repo.get(get_in(params, ["id"]))
      |> Repo.preload(:addresses)
      |> User.changeset(get_in(params, ["user"]))
      |> Repo.update

    case update do
      {:ok, updated_user} ->
        json(conn, map(updated_user))
      {:error, changeset} ->
        json(conn, %{ errors: changeset.errors })
    end
  end

  defp map(user) do
    %{
      id: user.id,
      email: user.email,
      types: user.types,
      permissions: user.permissions,
      active: user.active,
    }
  end
end
