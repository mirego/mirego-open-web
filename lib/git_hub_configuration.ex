defmodule GitHubConfiguration do
  def headers, do: [{:"User-Agent", "Open-Source @ Mirego (http://open.mirego.com)"}]
  def organization, do: "mirego"
  def authentication, do: "#{get_in(Application.get_env(:open_mirego, OpenMirego.GitHubConfiguration), [:api_key])}:x-oauth-basic"
end
