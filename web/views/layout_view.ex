defmodule OpenMirego.LayoutView do
  use OpenMirego.Web, :view

  def google_analytics_tracker_id do
    Application.get_env(:open_mirego, OpenMirego.GoogleAnalytics)[:tracker_id]
  end
end
