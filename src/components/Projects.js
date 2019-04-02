import React from 'react';
import styled from '@emotion/styled';

import Project from './Project';

import AccentLogo from '../images/accent.svg';
import DispatchLogo from '../images/dispatch.svg';
import ElixirBoilerplateLogo from '../images/elixir-boilerplate.svg';
import EmberBoilerplateLogo from '../images/ember-boilerplate.svg';
import ReactBoilerplateLogo from '../images/react-boilerplate.svg';
import SimpleCSSResetLogo from '../images/simple-css-reset.svg';
import EmberBestLanguageLogo from '../images/ember-best-language.svg';
import ActiveRecordJSONValidatorLogo from '../images/activerecord-json-validator.svg';
import MicroscopeLogo from '../images/microscope.svg';
import GaffeLogo from '../images/gaffe.svg';
import StylelintMiregoLogo from '../images/stylelint-mirego.svg';
import GenericLogo from '../images/generic.svg';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px 80px;

  @media (max-width: 810px) {
    & {
      margin-right: 0;
      margin-left: 0;
    }
  }
`;

export default () => (
  <Content>
    <Project
      url="https://github.com/mirego/accent"
      logo={AccentLogo}
      name="Accent"
      description="The first developer-oriented translation tool. True asynchronous flow between translators and your team."
      tags="#elixir #i18n"
    />

    <Project
      url="https://github.com/mirego/elixir-boilerplate"
      logo={ElixirBoilerplateLogo}
      name="Elixir Boilerplate"
      description="The stable base upon which we build our Elixir projects at Mirego."
      tags="#elixir #boilerplate"
    />

    <Project
      url="https://github.com/mirego/ember-boilerplate"
      logo={EmberBoilerplateLogo}
      name="Ember Boilerplate"
      description="The stable base upon which we build our Ember.js projects at Mirego."
      tags="#javascript #typescript #ember #boilerplate"
    />

    <Project
      url="https://github.com/mirego/react-boilerplate"
      logo={ReactBoilerplateLogo}
      name="React Boilerplate"
      description="The stable base upon which we build our React projects at Mirego."
      tags="#javascript #typescript #react #boilerplate"
    />

    <Project
      url="https://github.com/mirego/dispatch"
      logo={DispatchLogo}
      name="Dispatch"
      description="Dispatch makes sure pull requests within a GitHub organization get reviewed by the right people."
      tags="#elixir #github #code-review"
    />

    <Project
      url="https://github.com/mirego/simple-css-reset"
      logo={SimpleCSSResetLogo}
      name="Simple CSS Reset"
      description="A simple, no-nonsense CSS reset stylesheet to use as an NPM dependency."
      tags="#css #reset"
    />

    <Project
      url="https://github.com/mirego/ember-best-language"
      logo={EmberBestLanguageLogo}
      name="Ember Best Language"
      description="A FastBoot-enabled addon to detect the best language for your user."
      tags="#javascript #typescript #i18n"
    />

    <Project
      url="https://github.com/mirego/activerecord_json_validator"
      logo={ActiveRecordJSONValidatorLogo}
      name="ActiveRecord::JSONValidator"
      description="ActiveRecord::JSONValidator makes it easy to validate JSON attributes against a JSON schema."
      tags="#ruby #rails #json-schema"
    />

    <Project
      url="https://github.com/mirego/microscope"
      logo={MicroscopeLogo}
      name="Microscope"
      description="Microscope adds useful scopes targeting ActiveRecord boolean, date and datetime fields."
      tags="#ruby #rails"
    />

    <Project
      url="https://github.com/mirego/gaffe"
      logo={GaffeLogo}
      name="Gaffe"
      description="Gaffe handles Rails error pages in a clean, simple way."
      tags="#ruby #rails"
    />

    <Project
      url="https://github.com/mirego/taylor-ios"
      logo={GenericLogo}
      name="Taylor"
      description="iOS Framework with a bunch of classes and helpers for Swift."
      tags="#swift #ios"
    />

    <Project
      url="https://github.com/mirego/stylelint-mirego"
      logo={StylelintMiregoLogo}
      name="stylelint-mirego"
      description="A collection of Stylelint rules that help our code meet our code styling guidelines."
      tags="#javascript #css #sass #stylelint"
    />

    <Project
      url="https://github.com/mirego/kotlin-ssml-dsl"
      logo={GenericLogo}
      name="kotlin-ssml-dsl"
      description="A Kotlin DSL for SSML, supports Actions on Google."
      tags="#kotlin #ssml"
    />

    <Project
      url="https://github.com/mirego/ember-chai-dom-helpers"
      logo={GenericLogo}
      name="ember-chai-dom-helpers"
      description="A set of Chai helpers ready for your DOM."
      tags="#javascript #ember #chai"
    />
  </Content>
);
