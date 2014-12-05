defmodule OpenMirego.Repo.CollectionFetcher do
  alias Poison, as: JSON
  alias OpenMirego.Repo.CollectionSerializer

  def fetch do
    cached_body
    |> JSON.decode!
    |> CollectionSerializer.serialize
  end

  defp cached_body do
    ConCache.get_or_store(:github, "#{@org}:repos", &body/0)
  end

  defp body do
    case HTTPotion.get(url, GitHubConfiguration.headers) do
      %HTTPotion.Response{status_code: 200, body: body} ->
        body
      _error ->
        "[]"
    end
  end

  defp url, do: "https://#{GitHubConfiguration.auth}@api.github.com/orgs/#{GitHubConfiguration.org}/repos?type=public&per_page=100"
end
