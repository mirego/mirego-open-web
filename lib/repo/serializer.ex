defmodule OpenMirego.Repo.Serializer do
  use Timex
  alias OpenMirego.Repo.Resource

  @hidden_repos ~w(
    heroku-buildpack-bower
    RentThis-iOS
    Feedback-iOS
    mirego-open-web
  )

  @deprecated_repo_description "[Deprecated]"
  @fork_repo_description "[Fork]"

  # Hide specific repositories
  for name <- @hidden_repos do
    def serialize(%{"name" => unquote(name)}) do
      %Resource{visible: false}
    end
  end

  # Hide it if it’s not visible
  def serialize(%{"visible" => false}), do: %Resource{visible: false}

  # Hide it if it’s a fork
  def serialize(%{"fork" => true}), do: %Resource{visible: false}

  # Hide it if it’s a private repo
  def serialize(%{"private" => true}), do: %Resource{visible: false}

  # Hide it if it’s a deprecated repo
  def serialize(%{"description" => @deprecated_repo_description <> _}), do: %Resource{visible: false}

  # Hide it if it’s a fake-fork repo
  def serialize(%{"description" => @fork_repo_description <> _}), do: %Resource{visible: false}

  # Otherwise, return a resource
  def serialize(%{"name" => name, "description" => description, "language" => language, "html_url" => html_url, "pushed_at" => pushed_at, "stargazers_count" => stargazers_count}) do
    %Resource{
      name: name,
      description: sanitize_description(description),
      language: parsed_language(language),
      pretty_language: parsed_pretty_language(language),
      url: html_url,
      raw_pushed_at: pushed_at,
      pushed_at: parsed_time(pushed_at),
      stargazers_count: stargazers_count,
      visible: true
    }
  end

  # Remove prefix emoji shortname from description
  defp sanitize_description(nil), do: ""
  defp sanitize_description(description), do: Regex.replace(~r/^:[^:]+:\s*/, description, "")

  defp parsed_language("CSS"),         do: "css"
  defp parsed_language("Elixir"),      do: "elixir"
  defp parsed_language("Java"),        do: "java"
  defp parsed_language("JavaScript"),  do: "js"
  defp parsed_language("Objective-C"), do: "pod"
  defp parsed_language("Ruby"),        do: "gem"
  defp parsed_language("Shell"),       do: "shell"
  defp parsed_language("Swift"),       do: "swift"
  defp parsed_language("TypeScript"),  do: "typescript"
  defp parsed_language(nil),           do: "none"
  defp parsed_language(lang),          do: lang

  defp parsed_pretty_language("CSS"),         do: "CSS"
  defp parsed_pretty_language("Elixir"),      do: "Elixir"
  defp parsed_pretty_language("Java"),        do: "Java"
  defp parsed_pretty_language("JavaScript"),  do: "JS"
  defp parsed_pretty_language("Objective-C"), do: "Obj-C"
  defp parsed_pretty_language("Ruby"),        do: "Ruby"
  defp parsed_pretty_language("Shell"),       do: "Shell"
  defp parsed_pretty_language("Swift"),       do: "Swift"
  defp parsed_pretty_language("TypeScript"),  do: "TypeScript"
  defp parsed_pretty_language(nil),           do: ""
  defp parsed_pretty_language(lang),          do: lang

  defp parsed_time(time) do
    {:ok, date} = DateFormat.parse(time, "{ISOz}")

    date_secs = date |> Date.to_secs
    Time.now(:secs) - date_secs
  end
end
