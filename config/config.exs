# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

defmodule Utilities do
  def string_to_boolean("true"), do: true
  def string_to_boolean("1"), do: true
  def string_to_boolean(_), do: false
end

# Configures the endpoint
config :open_mirego, OpenMirego.Endpoint,
  root: Path.expand("..", __DIR__),
  http: [port: System.get_env("PORT")],
  url: [host: System.get_env("CANONICAL_HOST") || "localhost"],
  secret_key_base: System.get_env("SECRET_KEY_BASE"),
  debug_errors: false

config :open_mirego, OpenMirego.GitHubConfiguration,
  api_key: System.get_env("GITHUB_API_KEY")

config :open_mirego, OpenMirego.GoogleAnalytics,
  tracker_id: System.get_env("GOOGLE_ANALYTICS_TRACKER_ID")

config :open_mirego, OpenMirego.Typekit,
  kit_id: System.get_env("TYPEKIT_KIT_ID")

config :open_mirego, force_ssl: Utilities.string_to_boolean(System.get_env("FORCE_SSL"))

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
