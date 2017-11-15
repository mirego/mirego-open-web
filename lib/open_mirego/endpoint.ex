defmodule OpenMirego.Endpoint do
  use Phoenix.Endpoint, otp_app: :open_mirego

  # Always serve requests from a single canonical host
  plug PlugCanonicalHost, canonical_host: get_in(Application.get_env(:open_mirego, OpenMirego.Endpoint), [:url, :host])

  # Force SSL
  if Application.get_env(:open_mirego, :force_ssl) do
    plug Plug.SSL, rewrite_on: [:x_forwarded_proto]
  end

  # Serve at "/" the given assets from "priv/static" directory
  plug Plug.Static,
    at: "/", from: :open_mirego,
    only: ~w(css images favicon.ico robots.txt)

  plug Plug.Logger

  # Code reloading will only work if the :code_reloader key of
  # the :phoenix application is set to true in your config file.
  if code_reloading? do
    plug Phoenix.CodeReloader
  end

  plug Plug.Parsers,
    parsers: [:urlencoded],
    pass: ["*/*"]

  plug Plug.MethodOverride
  plug Plug.Head

  plug OpenMirego.Router
end
