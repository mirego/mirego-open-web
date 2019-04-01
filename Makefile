# Configuration
# -------------

APP_NAME ?= `grep -m1 name package.json | awk -F: '{ print $$2 }' | sed 's/[ ",]//g'`
APP_VERSION ?= `grep -m1 version package.json | awk -F: '{ print $$2 }' | sed 's/[ ",]//g'`
GIT_REVISION ?= `git rev-parse HEAD`

# Introspection targets
# ---------------------

.PHONY: help
help: header targets

.PHONY: header
header:
	@echo "\033[34mEnvironment\033[0m"
	@echo "\033[34m---------------------------------------------------------------\033[0m"
	@printf "\033[33m%-23s\033[0m" "APP_NAME"
	@printf "\033[35m%s\033[0m" $(APP_NAME)
	@echo ""
	@printf "\033[33m%-23s\033[0m" "APP_VERSION"
	@printf "\033[35m%s\033[0m" $(APP_VERSION)
	@echo ""
	@printf "\033[33m%-23s\033[0m" "GIT_REVISION"
	@printf "\033[35m%s\033[0m" $(GIT_REVISION)
	@echo "\n"

.PHONY: targets
targets:
	@echo "\033[34mTargets\033[0m"
	@echo "\033[34m---------------------------------------------------------------\033[0m"
	@perl -nle'print $& if m{^[a-zA-Z_-]+:.*?## .*$$}' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-22s\033[0m %s\n", $$1, $$2}'

# Build targets
# -------------

.PHONY: dependencies
dependencies:
	npm install

# CI targets
# ----------

.PHONY: lint
lint: lint-prettier lint-eslint lint-stylelint lint-stylelint-components ## Run lint tools on the code

.PHONY: lint-prettier
lint-prettier:
	npx prettier -l 'src/**/*.js' '**/*.md'

.PHONY: lint-eslint
lint-eslint:
	npx eslint . 'src/**/*.js'

.PHONY: lint-stylelint
lint-stylelint:
	npx stylelint --config .stylelintrc.json 'src/**/*.css'

.PHONY: lint-stylelint-components
lint-stylelint-components:
	npx stylelint --config .stylelintrc-components.json 'src/**/*.js'

.PHONY: lint-fix
lint-fix: format lint-tslint-fix

.PHONY: format
format: format-prettier ## Run formatting tools on the code

.PHONY: format-prettier
format-prettier:
	npx prettier --write 'src/**/*.js' '**/*.md'

.PHONY: build-app
build-app:
	npm run build
