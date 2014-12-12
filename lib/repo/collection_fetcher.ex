defmodule OpenMirego.Repo.CollectionFetcher do
  alias Poison, as: JSON
  alias OpenMirego.Repo.CollectionSerializer
  alias OpenMirego.Repo.CollectionLinkExtractor

  def fetch do
    cached_body
    |> CollectionSerializer.serialize
  end

  defp cached_body do
    ConCache.get_or_store(:github, "#{GitHubConfiguration.organization}:repos", fn -> body([], base_url) end)
  end

  defp body(acc, url) do
    case HTTPotion.get(url, GitHubConfiguration.headers) do
      %HTTPotion.Response{status_code: 200, body: body, headers: headers} ->
        body
        |> JSON.decode!
        |> Stream.concat(acc)
        |> fetch_next_body(headers[:Link])
      _error ->
        acc
    end
  end

  defp fetch_next_body(acc, link) do
    case CollectionLinkExtractor.extract(link) do
      %{"next" => next} ->
        body(acc, base_protocol <> next)
      nil ->
        acc
    end
  end

  defp base_url, do: "#{base_protocol}api.github.com/orgs/#{GitHubConfiguration.organization}/repos?type=public&per_page=50"
  defp base_protocol, do: "https://#{GitHubConfiguration.authentication}@"
end
