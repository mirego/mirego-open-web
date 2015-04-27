defmodule OpenMirego.Router do
  use Phoenix.Router

  pipeline :browser do
    plug :fetch_session
    plug :accepts, ["html"]
  end

  scope "/", OpenMirego do
    pipe_through :browser

    get "/", PageController, :index
    get "/*path", PageController, :show
  end
end
