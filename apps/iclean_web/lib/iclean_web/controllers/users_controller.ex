defmodule ICleanWeb.UsersController do
  use ICleanWeb, :controller

  import Ecto.Query
  alias IClean.{Repo, User}

  def index(conn, _params) do
    users = Repo.all(from u in User, select: %{
      id: u.id,
      email: u.email, 
      types: u.types, 
      permissions: u.permissions
    })
    IO.inspect users
    json(conn, %{ 
      users: users, 
      types: IClean.User.types,
      permissions: IClean.User.permissions,
    })
  end

  def update(conn, params) do
    user = Repo.get(User, params.id)
    user = User.changeset(user, params)
    case Repo.update(user) do
      {:ok, updated_user} ->
        json(conn, updated_user)
      {:error, changeset} ->
        json(conn, %{ errors: changeset.errors })
    end
  end

  def delete(conn, params) do
    user = Repo.get(User, params.id)
    case Repo.delete(user) do 
      {:ok, deleted_user} ->
        json(conn, deleted_user)
      {:error, changeset} ->
        json(conn, %{ errors: changeset.errors })
    end
  end
end
