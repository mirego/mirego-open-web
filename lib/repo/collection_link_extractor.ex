defmodule OpenMirego.Repo.CollectionLinkExtractor do
  @link_template ~r/^<https:\/\/(?<next>.+)>; rel=\"next\".?/

  def extract(link) do
    Regex.named_captures(@link_template, link)
  end
end
