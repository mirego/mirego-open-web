# Configuration
# -------------

APP_NAME ?= `grep -m1 name package.json | awk -F: '{ print $$2 }' | sed 's/[ ",]//g'`
APP_VERSION ?= `grep -m1 version package.json | awk -F: '{ print $$2 }' | sed 's/[ ",]//g'`
GIT_REVISION ?= `git rev-parse HEAD`

# Linter and formatter configuration
# ----------------------------------

PRETTIER_FILES_PATTERN = *.js '**/*.{js,jsx,ts,tsx,json,md,css}'
STYLELINT_FILES_PATTERN = '**/*.css'
ESLINT_FILES_PATTERN = '**/*.{js,ts,jsx,tsx}'

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
# ------------------

.PHONY: build
build: ## Build the application into a standalone directory
	npx gatsby build

# Development targets
# -------------------

.PHONY: dependencies
dependencies: ## Install dependencies required by the application
	npm install

.PHONY: run
run: ## Run the application in development mode
	npx gatsby develop

# Check, lint and format targets
# ------------------------------

.PHONY: format
format: format-scripts format-styles ## Format project files

.PHONY: format-scripts
format-scripts:
	npx prettier --write $(PRETTIER_FILES_PATTERN)
	npx eslint --fix $(ESLINT_FILES_PATTERN)

.PHONY: format-styles
format-styles:
	npx stylelint --fix $(STYLELINT_FILES_PATTERN)

.PHONY: lint
lint: lint-scripts lint-styles ## Lint project files

.PHONY: lint-scripts
lint-scripts:
	npx prettier --check $(PRETTIER_FILES_PATTERN)
	npx eslint $(ESLINT_FILES_PATTERN)

.PHONY: lint-styles
lint-styles:
	npx stylelint $(STYLELINT_FILES_PATTERN)
