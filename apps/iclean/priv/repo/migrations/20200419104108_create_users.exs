defmodule IClean.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :email, :string
      add :encrypted_password, :string
      add :types, {:array, :string}
      add :permissions, {:array, :string}

      timestamps()
    end

  end
end
