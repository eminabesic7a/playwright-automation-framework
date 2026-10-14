# Playwright Automation Framework

This project is a UI automation framework built with Playwright and TypeScript, using SauceDemo as the application under test.

I wanted to build something that goes beyond writing and running tests. The framework uses the Page Object Model (POM) to keep page-specific locators and actions separate from test scenarios, while custom fixtures handle the login setup so tests can focus on the functionality being tested.

## What I tested

The tests cover the main user flows, from login validation to adding and removing products from the cart and completing checkout. I also included negative scenarios to check how the application handles missing required information.

## Tech Stack

Playwright, TypeScript, Node.js and GitHub Actions.

## Running the tests

Install the dependencies and Playwright browsers:

```bash
npm ci
npx playwright install
```

Run the full test suite:

```bash
npx playwright test
```

To run the tests in Chromium only:

```bash
npx playwright test --project=chromium
```

To run only the smoke tests in Chromium:

```bash
npx playwright test --grep "@smoke" --project=chromium
```

## CI/CD and failure reporting

GitHub Actions runs the test suite on pushes and pull requests to the configured branches, with an HTML report uploaded after each run.

There is also a separate workflow that runs smoke tests automatically every night at midnight (Europe/Sarajevo) and can be triggered manually when needed.

When a smoke test fails, the workflow automatically creates a GitHub Issue for that test. If the same test fails again while its Issue is open, the new failure is added as a comment instead of creating another Issue.

Each Issue includes the failed test details, error information and a link to the workflow run, making it easier to investigate failures and track recurring problems.

A failed test does not necessarily mean there is a bug in the application. The report provides a starting point for investigation, while identifying the actual root cause still requires reviewing the available evidence.

## Project structure

The project is organized into `tests`, `pages`, `fixtures` and `parameters`, keeping test scenarios, page interactions, shared setup and test data separate. GitHub Actions workflows are maintained under `.github/workflows`.
