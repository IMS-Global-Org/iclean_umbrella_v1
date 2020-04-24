defmodule IClean.Repo.Migrations.AddUserIsActive do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :active, :boolean, default: true, null: false
    end
  end
end
