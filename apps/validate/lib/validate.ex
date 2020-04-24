defmodule Validate do
  @moduledoc """
  Validators for IClean apps. Validators are for specific use
  in schemas, controllers, and other related libraries.
  """

  @doc """
  Determines if the input is numeric, ie. does not contain alpha numerics

  ## Examples

      iex> Validate.is_numeric?(:term, 123)
      true
      iex> Validate.is_numeric?(:term, "abc")
      false

  """
  @spec is_numeric?(atom(), any()) :: boolean()
  def is_numeric?(_term, value) do
    valid = is_integer(value) || is_number(value)
    if valid, do: [], else: [term: "must be numeric"]
  end

  @spec is_alphaNumeric?(atom(), any()) :: boolean()
  def is_alphaNumeric?(_term, value) do
    valid = String.match?(value, ~r/^[[:alnum]|\s]+$/)
    if valid, do: [], else: [term: "Must be Alpha Numeric"]
  end
end
