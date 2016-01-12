defmodule OpenMirego.LayoutView do
  use OpenMirego.Web, :view

  def google_analytics_tracker_id do
    get_in(Application.get_env(:open_mirego, OpenMirego.GoogleAnalytics), [:tracker_id])
  end

  def typekit_kit_id do
    get_in(Application.get_env(:open_mirego, OpenMirego.Typekit), [:kit_id])
  end
end
