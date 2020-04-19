# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     IClean.Repo.insert!(%IClean.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias IClean.{Repo, User}

default_users = [
  %User{
    email: "uber@iclean.com",
    encrypted_password: "Testtest123!",
    types: ["uber", "admin", "basic", "guest"],
    permissions: ["create", "update", "delete", "show", "index"]
  },
  %User{
    email: "basic@iclean.com",
    encrypted_password: "Testtest123!",
    types: ["basic", "guest"],
    permissions: ["create", "update", "delete", "show", "index"]
  },
]
