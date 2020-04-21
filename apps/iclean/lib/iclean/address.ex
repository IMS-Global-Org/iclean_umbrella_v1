defmodule IClean.Address do
  use Ecto.Schema
  import Ecto.Changeset

  schema "addresses" do
    field :city, :string
    field :country, :string
    field :state, :string
    field :street_1, :string
    field :street_2, :string
    field :zipcode, :integer

    many_to_many :users, IClean.User, join_through: "users_addresses"

    timestamps()
  end

  @doc false
  def changeset(address, attrs) do
    address
    |> cast(attrs, [:street_1, :street_2, :city, :state, :zipcode, :country])
    |> validate_required([:street_1, :street_2, :city, :state, :zipcode, :country])
  end
end
