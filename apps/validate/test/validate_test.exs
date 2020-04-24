defmodule ValidateTest do
  use ExUnit.Case
  doctest Validate

  test "greets the world" do
    assert Validate.hello() == :world
  end
end
