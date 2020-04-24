defmodule IClean.Address do
  use Ecto.Schema
  import Ecto.Changeset
  import Validate, only: [
    is_numeric?: 2,
    is_alphaNumeric?: 2
  ]

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
    |> validate_required([:street_1, :city, :state, :zipcode])
    |> validate_change(:zipcode, &is_numeric?/2)
    |> validate_change(:street_1, &is_alphaNumeric?/2)
    |> validate_change(:city, &is_alphaNumeric?/2)
    |> validate_change(:state, &is_alphaNumeric?/2)
    |> validate_change(:country, &is_alphaNumeric?/2)
  end
end
