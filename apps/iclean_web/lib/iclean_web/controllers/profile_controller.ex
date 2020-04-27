defmodule ICleanWeb.ProfileController do
  use ICleanWeb, :controller

  def personal_info(conn, params) do
    json(conn, %{ first_name: "Brennick", id: get_in(params, ["id"]) })
  end
end
