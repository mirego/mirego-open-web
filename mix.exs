defmodule OpenMirego.Mixfile do
  use Mix.Project

  def project do
    [app: :open_mirego,
     version: "0.0.1",
     elixir: "~> 1.0",
     elixirc_paths: ["lib", "web"],
     compilers: [:phoenix] ++ Mix.compilers,
     deps: deps]
  end

  # Configuration for the OTP application
  #
  # Type `mix help compile.app` for more information
  def application do
    [mod: {OpenMirego, []},
     applications: [:phoenix, :cowboy, :logger, :httpotion, :con_cache]]
  end

  # Specifies your project dependencies
  #
  # Type `mix help deps` for examples and options
  defp deps do
    [{:phoenix, github: "phoenixframework/phoenix"},
     {:con_cache, "~> 0.6.0"},
     {:ibrowse, github: "cmullaparthi/ibrowse", tag: "v4.1.0"},
     {:httpotion, "~> 0.2.0"},
     {:timex, "~> 0.13.1"},
     {:cowboy, "~> 1.0"}]
  end
end
