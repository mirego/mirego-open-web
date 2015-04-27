defmodule OpenMirego.Mixfile do
  use Mix.Project

  def project do
    [app: :open_mirego,
     version: "0.0.1",
     elixir: "~> 1.0",
     elixirc_paths: ["lib", "web"],
     compilers: [:phoenix] ++ Mix.compilers,
     elixirc_paths: elixirc_paths(Mix.env),
     compilers: [:phoenix] ++ Mix.compilers,
     build_embedded: Mix.env == :prod,
     start_permanent: Mix.env == :prod,
     deps: deps]
  end

  # Configuration for the OTP application
  #
  # Type `mix help compile.app` for more information
  def application do
    [mod: {OpenMirego, []},
     applications: [:phoenix, :cowboy, :logger, :httpotion, :con_cache]]
  end

  def signing_salt, do: System.get_env("SIGNING_SALT")

  # Specifies your project dependencies
  #
  # Type `mix help deps` for examples and options
  defp deps do
    [{:phoenix, "~> 0.11"},
     {:plug, "~> 0.12.1", override: true},
     {:con_cache, "~> 0.6.1"},
     {:ibrowse, github: "cmullaparthi/ibrowse", tag: "v4.1.1"},
     {:httpotion, "~> 0.2.0"},
     {:timex, "~> 0.13.4"},
     {:cowboy, "~> 1.0"}]
  end

  # Specifies which paths to compile per environment
  defp elixirc_paths(:test), do: ["lib", "web", "test/support"]
  defp elixirc_paths(_),     do: ["lib", "web"]
end
