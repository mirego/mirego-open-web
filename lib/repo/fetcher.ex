defmodule OpenMirego.Repo.Fetcher do
  alias Poison, as: JSON
  alias OpenMirego.Repo.Serializer

  def fetch(org) do
    org
    |> body
    |> JSON.decode!
    |> Serializer.serialize
  end

  defp body(org) do
    url = "https://api.github.com/orgs/#{org}/repos?type=sources&per_page=100"
    {:ok, 200, _headers, client} = :hackney.get(url)
    {:ok, body} = :hackney.body(client)

    body
  end
end
