defmodule IClean.User do
  use Ecto.Schema
  import Ecto.Changeset

  @types ["super", "uber", "admin", "basic", "guest"]
  @permissions ["show", "update", "edit", "create", "delete"]

  schema "users" do
    field :email, :string
    field :encrypted_password, :string
    field :permissions, {:array, :string}
    field :types, {:array, :string}
    field :active, :boolean

    many_to_many :addresses, IClean.Address, join_through: "users_addresses"
    has_one :profile, IClean.Profile

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:email, :encrypted_password, :types, :permissions, :active])
    |> validate_required([:email, :encrypted_password, :types, :permissions])
    |> validate_subset(:types, @types)
    |> validate_subset(:permissions, @permissions)
  end

  def types, do: @types
  def permissions, do: @permissions

end
