defmodule IClean.Repo.Migrations.CreateUsersAddresses do
  use Ecto.Migration

  def change do
    create table(:users_addresses) do
      add :user_id, references(:users)
      add :address_id, references(:addresses)
    end

    create unique_index(:users_addresses, [:user_id, :address_id])
  end
end
