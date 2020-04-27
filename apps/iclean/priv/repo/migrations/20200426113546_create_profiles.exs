defmodule IClean.Repo.Migrations.CreateProfiles do
  use Ecto.Migration

  def change do
    create table(:profiles) do
      add :first_name, :string
      add :middle_name, :string
      add :last_name, :string
      add :date_of_birth, :date

      timestamps()
    end

  end
end
