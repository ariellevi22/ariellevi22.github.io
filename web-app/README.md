# Development Information

![Continuous Deployment](https://github.com/alevi22/alevi22.github.io/workflows/Deploy/badge.svg)

## Accessing the Project

View the finished product at [alevi22.github.io](https://alevi22.github.io).

## Technologies

This project is made with [React.js](https://reactjs.org/) using [TypeScript](https://www.typescriptlang.org/) and [Vite](https://vitejs.dev/).

## Project Structure

-   `index.html` is the main entry point to the app
-   `public` contains the assets and metadata used in `index.html`
-   `src` contains all the project code
    -   `main.tsx` is the entry point for React
    -   `App.tsx` is the top-level React component for the app
    -   `Assets` contains common assets (like photos) used in the app
    -   `Components` contains common React components used in the app, like the logo and cards
    -   `Containers` contains common React components that help structure the app, like grids and sections
    -   `Views` contains React components for the main views and content of the app, which are made up of components from `Components` and `Containers`
    -   `Types` contains TypeScript types used across the app
    -   `Global` contains global variables used across the app
    -   `Utils` contains utility functions used across the app
    -   `Theme` contains theming and styling information for the app
-   `package.json` and `package-lock.json` contain information about project scripts and dependencies
-   `tsconfig.json` and `tsconfig.node.json` contain TypeScript configuration information
-   `.eslintrc.json` contains configuration information for [ESLint](https://eslint.org/) code analysis
-   `.prettierrc.json` contains configuration information for [Prettier](https://prettier.io/) code formatting

## Development

To run the app in development mode, run:

```sh
npm install
npm start
```

Then, follow the link provided in the terminal to the local web app.

## Deployment

The project is deployed to [alevi22.github.io](https://alevi22.github.io) using [GitHub Pages](https://pages.github.com/).

### Manual Deployment

To manually deploy changes, run:

```sh
npm run deploy
```

### Continuous Deployment

Whenever new code is pushed to the repository's `main` branch, GitHub Actions will automatically deploy the updates.

To enable automatic deployment through GitHub Actions, the repository has an access token stored as a secret in GitHub. When the token expires, [generate a new token](https://github.com/settings/tokens/new) on GitHub and then [update the value of the secret](https://github.com/alevi22/alevi22.github.io/settings/secrets/actions) in the GitHub repository settings.
