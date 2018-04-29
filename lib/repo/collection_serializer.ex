defmodule OpenMirego.Repo.CollectionSerializer do
  use Timex
  alias OpenMirego.Repo.Resource
  alias OpenMirego.Repo.Serializer

  def serialize(json) do
    json
    |> Stream.map(&Serializer.serialize(&1))
    |> Stream.reject(&reject?(&1))
    |> Enum.sort(&(&1.pushed_at > &2.pushed_at))
  end

  defp reject?(%Resource{visible: false}), do: true
  defp reject?(%Resource{}), do: false
end
