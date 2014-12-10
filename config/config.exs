# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the router
config :phoenix, OpenMirego.Router,
  url: [host: "localhost"],
  http: [port: System.get_env("PORT")],
  secret_key_base: "VudCNV+dUpp13UIIERCct4JORo1zRNmQxHa24VozIB+v7BXzcW2p8lcxWEahemqCZizYsmkbDHd5GdCLoQoLiw==",
  catch_errors: true,
  debug_errors: false,
  error_controller: OpenMirego.PageController

config :github, OpenMirego.Router,
  api_key: System.get_env("GITHUB_API_KEY")

config :google_analytics, OpenMirego.Router,
  tracker_id: System.get_env("GOOGLE_ANALYTICS_TRACKER_ID")

# Session configuration
config :phoenix, OpenMirego.Router,
  session: [store: :cookie,
            key: "_open_mirego_key"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
