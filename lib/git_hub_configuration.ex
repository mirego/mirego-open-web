defmodule GitHubConfiguration do
  def headers, do: [{:"User-Agent", "Open-Source @ Mirego (http://open.mirego.com)"}]
  def org, do: "mirego"
  def auth, do: "#{Application.get_env(:github, OpenMirego.Router)[:api_key]}:x-oauth-basic"
end
