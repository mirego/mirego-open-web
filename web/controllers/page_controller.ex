defmodule OpenMirego.PageController do
  use Phoenix.Controller

  plug :action

  def index(conn, _params) do
    repos = OpenMirego.Repo.Fetcher.fetch

    render conn, "index.html", repos: repos
  end

  def show(conn, %{"path" => path}) do
    redirect conn, external: "https://github.com/mirego/#{path}"
  end

  def not_found(conn, _params) do
    render conn, "not_found.html"
  end

  def error(conn, _params) do
    render conn, "error.html"
  end
end
