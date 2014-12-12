defmodule GitHubConfiguration do
  def headers, do: [{:"User-Agent", "Open-Source @ Mirego (http://open.mirego.com)"}]
  def organization, do: "1202891" # mirego
  def authentication, do: "#{Application.get_env(:github, OpenMirego.Router)[:api_key]}:x-oauth-basic"
end
