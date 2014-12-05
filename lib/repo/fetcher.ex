defmodule OpenMirego.Repo.Fetcher do
  alias Poison, as: JSON
  alias OpenMirego.Repo.Serializer

  @user_agent {:"User-Agent", "Open Mirego Website"}
  @org "mirego"

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
    case HTTPotion.get(url(repo), [@user_agent]) do
      %HTTPotion.Response{status_code: 200, body: body} ->
        body
      _error ->
        "{\"visible\":false}"
    end
  end

  defp url(repo), do: "https://#{auth}@api.github.com/repos/#{@org}/#{repo}"
  defp auth, do: "#{Application.get_env(:github, OpenMirego.Router)[:api_key]}:x-oauth-basic"
end
