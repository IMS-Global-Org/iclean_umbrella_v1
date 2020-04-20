defmodule IClean.User do
  use Ecto.Schema
  import Ecto.Changeset

  @types ['super', 'uber', 'admin', 'basic', 'guest']
  @permissions ['show', 'update', 'edit', 'create', 'delete']

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
    |> validate_change(:types, &has_valid_types?/2)
    |> validate_change(:permissions, &has_valid_permissions?/2)
  end

  defp has_valid_types?(:types, types) do
    all_valid_types = Enum.all?(types, fn type -> 
      Enum.member?(@types, type) 
    end)
    if all_valid_types, do: [], else: [types: "User Types Invalid"]
  end

  defp has_valid_permissions?(:permissions, permissions) do
    all_valid = Enum.all?(permissions, fn permission -> 
      Enum.member?(@permissions, permission)
    end)
    if all_valid, do: [], else: [permissions, "User Permissions Invalid"]
  end
end
