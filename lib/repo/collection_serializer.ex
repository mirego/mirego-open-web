defmodule OpenMirego.Repo.CollectionSerializer do
  use Timex
  alias OpenMirego.Repo.Serializer

  @exclusions ~w(
    mirego.github.io
    heroku-buildpack-bower
    RentThis-iOS
  )

  def serialize(json) do
    json
    |> Stream.reject(&reject?(&1))
    |> Stream.map(&Serializer.serialize(&1))
    |> Enum.sort(&(&1.pushed_at < &2.pushed_at))
  end

  defp reject?(%{"name" => name, "fork" => repo_is_a_fork}) do
    repo_is_a_fork || Enum.member?(@exclusions, name)
  end
end
