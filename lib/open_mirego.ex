defmodule OpenMirego do
  use Application

  # See http://elixir-lang.org/docs/stable/elixir/Application.html
  # for more information on OTP Applications
  def start(_type, _args) do
    import Supervisor.Spec, warn: false

    children = [
      worker(
        ConCache, [
          [ttl_check: :timer.seconds(1), ttl: :timer.seconds(300)],
          [name: :github]
        ]
      )
    ]

    # See http://elixir-lang.org/docs/stable/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: OpenMirego.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
