defmodule OpenMirego.Repo.Resource do
  defstruct name: nil,
    description: nil,
    language: nil,
    pretty_language: nil,
    url: nil,
    pushed_at: nil,
    fork: nil,
    stargazers_count: nil,
    visible: true
end
