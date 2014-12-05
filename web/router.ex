defmodule OpenMirego.Router do
  use Phoenix.Router

  pipeline :browser do
    plug :accepts, ~w(html)
    plug :fetch_session
  end

  scope "/" do
    pipe_through :browser

    get "/", OpenMirego.PageController, :index
    get "/*path", OpenMirego.PageController, :show
  end
end
