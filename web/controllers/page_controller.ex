defmodule OpenMirego.PageController do
  use Phoenix.Controller

  plug :action

  def index(conn, _params) do
    repos = OpenMirego.Repo.Fetcher.fetch("mirego")

    render conn, "index.html", repos: repos
  end

  def not_found(conn, _params) do
    render conn, "not_found.html"
  end

  def error(conn, _params) do
    render conn, "error.html"
  end
end
