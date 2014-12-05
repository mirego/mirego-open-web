defmodule OpenMirego.Repo.CollectionFetcher do
  alias Poison, as: JSON
  alias OpenMirego.Repo.CollectionSerializer

  @user_agent {:"User-Agent", "Open Mirego Website"}
  @org "mirego"

  def fetch do
    cached_body
    |> JSON.decode!
    |> CollectionSerializer.serialize
  end

  defp cached_body do
    ConCache.get_or_store(:github, "#{@org}:repos", &body/0)
  end

  defp body do
    case HTTPotion.get(url, [@user_agent]) do
      %HTTPotion.Response{status_code: 200, body: body} ->
        body
      _error ->
        "[]"
    end
  end

  defp url, do: "https://#{auth}@api.github.com/orgs/#{@org}/repos?type=public&per_page=100"
  defp auth, do: "#{Application.get_env(:github, OpenMirego.Router)[:api_key]}:x-oauth-basic"
end
