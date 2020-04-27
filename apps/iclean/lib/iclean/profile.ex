defmodule IClean.Profile do
  use Ecto.Schema
  import Ecto.Changeset

  schema "profiles" do
    field :date_of_birth, :date
    field :first_name, :string
    field :last_name, :string
    field :middle_name, :string

    belongs_to :user, IClean.User

    timestamps()
  end

  @doc false
  def changeset(profile, attrs) do
    profile
    |> cast(attrs, [:first_name, :middle_name, :last_name, :date_of_birth])
    |> validate_required([:first_name, :middle_name, :last_name, :date_of_birth])
  end
end
