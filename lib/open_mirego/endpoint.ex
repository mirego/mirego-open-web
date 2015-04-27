defmodule OpenMirego.Endpoint do
  use Phoenix.Endpoint, otp_app: :open_mirego

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

  plug Plug.Session,
    store: :cookie,
    key: "_open_mirego_key",
    signing_salt: OpenMirego.Mixfile.signing_salt

  plug :router, OpenMirego.Router
end
