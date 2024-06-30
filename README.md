# Credova Developer Documentation

The [Credova](https://credova.com/) developer documentation. This site is hosted at [developers.credova.com](https://developers.credova.com/)

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server at http://localhost:3000/ and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Generate Update API Documentation

```
yarn docusaurus gen-api-docs all
```

Clean up existing documentation with:

```
yarn docusaurus clean-api-docs all
```

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
