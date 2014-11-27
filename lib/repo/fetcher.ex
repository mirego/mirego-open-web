defmodule OpenMirego.Repo.Fetcher do
  alias Poison, as: JSON
  alias OpenMirego.Repo.Serializer

  @user_agent {:"User-Agent", "Open Mirego Website"}
  @api_key Application.get_env(:github, OpenMirego.Router)[:api_key]
  @auth "#{@api_key}:x-oauth-basic"
  @org "mirego"
  @url "https://#{@auth}@api.github.com/orgs/#{@org}/repos?type=public&per_page=100"

  def fetch do
    body
    |> JSON.decode!
    |> Serializer.serialize
  end

  defp body do
    case HTTPotion.get(@url, [@user_agent]) do
      %HTTPotion.Response{status_code: 200, body: body} ->
        body
      _ ->
        "{}"
    end
  end
end
