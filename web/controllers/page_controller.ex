defmodule OpenMirego.PageController do
  use Phoenix.Controller

  plug :action

  def index(conn, _params) do
    repos = OpenMirego.Repo.CollectionFetcher.fetch

    render conn, "index.html", repos: repos
  end

  def show(conn, %{"path" => path}) do
    repo = OpenMirego.Repo.Fetcher.fetch(path)

    # Make sure we only redirect to public repositories
    if repo.public && !repo.fork do
      redirect conn, external: repo.url
    else
      redirect conn, to: "/"
    end
  end

  def not_found(conn, _params) do
    render conn, "not_found.html"
  end

  def error(conn, _params) do
    render conn, "error.html"
  end
end
