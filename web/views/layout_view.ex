defmodule OpenMirego.LayoutView do
  use OpenMirego.View

  def google_analytics_tracker_id do
    Application.get_env(:google_analytics, OpenMirego.Router)[:tracker_id]
  end
end
