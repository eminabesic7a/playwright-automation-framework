# Playwright Automation Framework

UI test automation project built with Playwright and TypeScript, using SauceDemo as the application under test.

The project follows the Page Object Model (POM) and uses custom fixtures to manage login setup and keep test code clean and reusable.

### Test Coverage

Tests cover login validation, cart operations, checkout completion and required-field validation.

### Tech Stack

Playwright · TypeScript · Node.js · GitHub Actions

### Run Tests

```bash
npm ci
npx playwright install
npx playwright test
```

To run tests in Chromium only:

```bash
npx playwright test --project=chromium
```

### CI

GitHub Actions automatically runs the test suite on pushes and pull requests to the configured branches. Test results are available through the uploaded HTML report.
