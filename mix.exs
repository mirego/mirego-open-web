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
     applications: [:phoenix, :cowboy, :logger, :hackney]]
  end

  # Specifies your project dependencies
  #
  # Type `mix help deps` for examples and options
  defp deps do
    [{:phoenix, github: "phoenixframework/phoenix"},
     {:hackney, "~> 0.15"},
     {:timex, "~> 0.13.1"},
     {:cowboy, "~> 1.0"}]
  end
end
