# Development Information

![Deployment Status](https://github.com/alevi22/alevi22.github.io/workflows/Deploy/badge.svg)

## Accessing the Project

View the finished product at [alevi22.github.io](https://alevi22.github.io).

## Technologies

This project is made with [React.js](https://reactjs.org/) using [TypeScript](https://www.typescriptlang.org/). For styling, it uses [JSS](https://cssinjs.org/react-jss) (CSS in JavaScript).

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Find the [Create React App guide](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md) here.

## Project Structure

-   `public` contains the base HTML file and assets that React will use to run
-   `src` contains all the project code
    -   `index.ts` is the main entry point for React
    -   `App.ts` is the top-level React component for the app
    -   `Assets` contains all common assets (like photos) used in the app
    -   `Components` contains all common React components used in the app, like the logo and cards
    -   `Containers` contains common React components that help structure the app, like grids and sections
    -   `Views` contains React components for the main views and content of the app, which are made up of components from `Components` and `Containers`
    -   `models.ts` contains TypeScript types used across the app
    -   `globals.ts` contains global variables used across the app
    -   `utils.ts` contains utility functions used across the app
    -   `index.css` contains common styling for the app
    -   `theme.ts` contains additional theming and styling information for JSS
-   `package.json` and `package-lock.json` contain information about project dependencies
-   `tsconfig.json` contains TypeScript configuration information
-   `prettierrc.json` contains configuration information for [Prettier](https://prettier.io/) code formatting

## Development

To run the app in development mode, run:

```sh
npm install
npm start
```

Then, open [localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits, and you will also see any lint errors in the console.

## Deployment

The project is deployed using [GitHub Pages](https://pages.github.com/).

### Manual Deployment

To manually deploy changes to [alevi22.github.io](https://alevi22.github.io), run:

```sh
npm run deploy
```

### Continuous Deployment

Whenever new code is pushed to the repository's `main` branch, GitHub Actions will automatically deploy the updates to [alevi22.github.io](https://alevi22.github.io).

To enable automatic deployment through GitHub Actions, the repository has an access token stored as a secret in GitHub. When the token expires, [generate a new token](https://github.com/settings/tokens/new) on GitHub and then [update the value of the secret](https://github.com/alevi22/alevi22.github.io/settings/secrets/actions) in the GitHub repository settings.
