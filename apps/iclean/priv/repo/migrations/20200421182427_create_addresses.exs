defmodule IClean.Repo.Migrations.CreateAddresses do
  use Ecto.Migration

  def change do
    create table(:addresses) do
      add :street_1, :string
      add :street_2, :string
      add :city, :string
      add :state, :string
      add :zipcode, :integer
      add :country, :string

      timestamps()
    end

  end
end
