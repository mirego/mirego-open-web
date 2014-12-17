defmodule OpenMirego.PageController do
  use Phoenix.Controller
  alias OpenMirego.Repo.Resource
  import OpenMirego.Router.Helpers

  plug :action

  def index(conn, _params) do
    conn
    |> assign(:repos, OpenMirego.Repo.CollectionFetcher.fetch)
    |> render "index.html"
  end

  def show(conn, %{"path" => path}) do
    # Make sure we only redirect to public repositories
    case OpenMirego.Repo.Fetcher.fetch(path) do
      %Resource{visible: true, url: url} -> redirect(conn, external: url)
      _ -> redirect(conn, to: page_path(:index))
    end
  end
end
