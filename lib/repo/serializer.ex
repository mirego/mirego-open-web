defmodule OpenMirego.Repo.Serializer do
  use Timex
  alias OpenMirego.Repo.Resource

  @hidden_repos ~w(
    mirego.github.io
    heroku-buildpack-bower
    RentThis-iOS
    patch-patch
    Feedback-iOS
    ember-foreigner
    ember-encore
    mirego-open-web
  )

  for name <- @hidden_repos do
    def serialize(%{"name" => unquote(name)}) do
      %Resource{visible: false}
    end
  end

  # If the resource is not visible, is a fork, and/or is private: Mark it as {visible: false}
  def serialize(%{"visible" => false}), do: %Resource{visible: false}
  def serialize(%{"fork" => true}),     do: %Resource{visible: false}
  def serialize(%{"private" => true}),  do: %Resource{visible: false}

  def serialize(%{"name" => name, "description" => description, "language" => language, "html_url" => html_url, "pushed_at" => pushed_at, "stargazers_count" => stargazers_count}) do
    %Resource{
      name: name,
      description: description,
      language: parsed_language(language),
      pretty_language: parsed_pretty_language(language),
      url: html_url,
      raw_pushed_at: pushed_at,
      pushed_at: parsed_time(pushed_at),
      stargazers_count: stargazers_count,
      visible: true
    }
  end

  defp parsed_language("Objective-C"), do: "pod"
  defp parsed_language("Ruby"),        do: "gem"
  defp parsed_language("JavaScript"),  do: "js"
  defp parsed_language("CSS"),         do: "css"
  defp parsed_language("Java"),        do: "java"
  defp parsed_language(nil),           do: "no-language"
  defp parsed_language(lang),          do: lang

  defp parsed_pretty_language("Objective-C"), do: "iOS"
  defp parsed_pretty_language("Ruby"),        do: "Ruby"
  defp parsed_pretty_language("JavaScript"),  do: "js"
  defp parsed_pretty_language("CSS"),         do: "css"
  defp parsed_pretty_language("Java"),        do: "Java"
  defp parsed_pretty_language(nil),           do: "no-language"
  defp parsed_pretty_language(lang),          do: lang

  defp parsed_time(time) do
    {:ok, date} = DateFormat.parse(time, "{ISOz}")

    Time.now(:secs) - Date.convert(date, :secs)
  end
end
