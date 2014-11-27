use Mix.Config

# ## SSL Support
#
# To get SSL working, you will need to set:
#
#     https: [port: 443,
#             keyfile: System.get_env("SOME_APP_SSL_KEY_PATH"),
#             certfile: System.get_env("SOME_APP_SSL_CERT_PATH")]
#
# Where those two env variables point to a file on
# disk for the key and cert.

config :phoenix, OpenMirego.Router,
  http: [port: System.get_env("PORT")],
  ssl: false,
  host: System.get_env("CANONICAL_HOST"),
  secret_key_base: System.get_env("SECRET_KEY_BASE")

config :logger,
  level: :info
