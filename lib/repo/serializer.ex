defmodule OpenMirego.Repo.Serializer do
  use Timex
  alias OpenMirego.Repo.Resource

  @exclusions ~w(
    mirego.github.io
    heroku-buildpack-bower
    RentThis-iOS
  )

  def serialize(json) do
    json
    |> Stream.reject(&reject?(&1))
    |> Stream.map(&map(&1))
    |> Enum.sort(&(&1.pushed_at < &2.pushed_at))
  end

  defp reject?(%{"name" => name}), do: Enum.member?(@exclusions, name)

  defp map(%{"name" => name, "description" => description, "language" => language, "html_url" => html_url, "pushed_at" => pushed_at}) do
    %Resource{
      name: name,
      description: description,
      language: parsed_language(language),
      pretty_language: parsed_pretty_language(language),
      url: html_url,
      raw_pushed_at: pushed_at,
      pushed_at: parsed_time(pushed_at)
    }
  end

  defp parsed_language("Objective-C"), do: "pod"
  defp parsed_language("Ruby"),        do: "gem"
  defp parsed_language("JavaScript"),  do: "js"
  defp parsed_language("CSS"),         do: "css"
  defp parsed_language(nil),           do: "no-language"
  defp parsed_language(lang),          do: lang

  defp parsed_pretty_language("Objective-C"), do: "iOS"
  defp parsed_pretty_language("Ruby"),        do: "Ruby"
  defp parsed_pretty_language("JavaScript"),  do: "js"
  defp parsed_pretty_language("CSS"),         do: "css"
  defp parsed_pretty_language(nil),           do: "no-language"
  defp parsed_pretty_language(lang),          do: lang

  defp parsed_time(time) do
    {:ok, date} = DateFormat.parse(time, "{ISOz}")

    Time.now(:secs) - Date.convert(date, :secs)
  end
end
