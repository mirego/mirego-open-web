defmodule OpenMirego.LayoutView do
  use OpenMirego.Web, :view

  def google_analytics_tracker_id do
    Application.get_env(:google_analytics, OpenMirego.Router)[:tracker_id]
  end
end
