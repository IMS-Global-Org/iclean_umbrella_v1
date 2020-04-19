defmodule IClean.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :email, :string
    field :encrypted_password, :string
    field :permissions, {:array, :string}
    field :types, {:array, :string}

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:email, :encrypted_password, :types, :permissions])
    |> validate_required([:email, :encrypted_password, :types, :permissions])
  end
end
