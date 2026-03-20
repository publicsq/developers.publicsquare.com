# PublicSquare Developer Documentation

Docusaurus 3.9 static documentation site for https://developers.publicsquare.com — the developer portal for PublicSquare's payment processing APIs.

## Commands

```bash
yarn install          # Install dependencies (Node >= 20, Yarn 1.22.22)
yarn start            # Dev server at http://localhost:3000/
yarn build            # Generate static build to /build
yarn serve            # Serve built site locally
yarn clear            # Clear Docusaurus cache
yarn typecheck        # TypeScript type checking

yarn regenerate-docs  # Clean + regenerate API docs from OpenAPI specs
yarn clean-docs       # Remove generated API docs
yarn generate-docs    # Generate API docs from OpenAPI specs
```

## Project Structure

- `docs/` — All documentation content (MDX files)
  - `guides/` — How-to guides for payments, payouts, refunds, marketplaces
  - `concepts/` — Conceptual docs (accounts, API keys, webhooks, disputes)
  - `api/` — Auto-generated OpenAPI docs (do not edit manually)
  - `plugins/` — eCommerce plugin docs (Shopify, WooCommerce, Magento, BigCommerce)
  - `sdks/` — SDK docs (JavaScript Elements, React Elements)
- `src/` — Custom React components, SCSS styles, theme overrides
- `static/` — Static assets (images, favicon)
- `docusaurus.config.ts` — Main site configuration
- `sidebars.ts` — Navigation structure

## API Documentation

API docs are auto-generated from live OpenAPI specs:
- Accounts API: `https://api.publicsquare.com/swagger/accounts/swagger.yaml`
- Financial API: `https://api.publicsquare.com/swagger/financial/swagger.yaml`

Run `yarn regenerate-docs` after upstream API changes. Never manually edit files under `docs/api/`.

## Tech Stack

- Docusaurus 3.9 + React 19 + TypeScript
- SASS for styling (`src/css/`)
- `docusaurus-plugin-openapi-docs` for API reference generation
- Semantic-release for automated versioning (triggered on master push)
- GitHub Actions: PR builds on PRs, semantic-release on master merge
