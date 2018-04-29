defmodule OpenMirego.Mixfile do
  use Mix.Project

  def project do
    [app: :open_mirego,
     version: "0.0.1",
     elixir: "~> 1.6.0",
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
     applications: [:phoenix, :cowboy, :logger, :httpotion, :con_cache, :timex]]
  end

  # Specifies your project dependencies
  #
  # Type `mix help deps` for examples and options
  defp deps do
    [{:phoenix, "~> 1.3"},
     {:phoenix_html, "~> 2.0"},
     {:con_cache, "~> 0.8.1"},
     {:ibrowse, github: "cmullaparthi/ibrowse", tag: "v4.1.2"},
     {:httpotion, "~> 0.2.0"},
     {:timex, "~> 3.2.2"},
     {:plug_canonical_host, "~> 0.2.0"},
     {:cowboy, "~> 1.0"}]
  end

  # Specifies which paths to compile per environment
  defp elixirc_paths(:test), do: ["lib", "web", "test/support"]
  defp elixirc_paths(_),     do: ["lib", "web"]
end
