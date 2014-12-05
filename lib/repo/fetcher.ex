defmodule OpenMirego.Repo.Fetcher do
  alias Poison, as: JSON
  alias OpenMirego.Repo.Serializer

  def fetch(repo) do
    cached_body(repo)
    |> JSON.decode!
    |> Serializer.serialize
  end

  defp cached_body(repo) do
    ConCache.get_or_store(:github, "#{@org}:repo:#{repo}", fn() ->
      body(repo)
    end)
  end

  defp body(repo) do
    case HTTPotion.get(url(repo), GitHubConfiguration.headers) do
      %HTTPotion.Response{status_code: 200, body: body} ->
        body
      _error ->
        "{\"visible\":false}"
    end
  end

  defp url(repo), do: "https://#{GitHubConfiguration.auth}@api.github.com/repos/#{GitHubConfiguration.org}/#{repo}"
end
