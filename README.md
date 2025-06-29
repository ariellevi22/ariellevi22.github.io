# Personal Portfolio Website

**Ariel Levi**

Welcome to the code repository for my personal portfolio website! Continue through this repository to look through the code, or view my finished work at **[ariellevi22.github.io](https://ariellevi22.github.io)**.

<img src="./app/opengraph-image.png" alt="Ariel Levi's personal portfolio website" />

## About the Project

To combine my passions for code, writing, and design, I created this personal portfolio that showcases my experiences and accomplishments so far. I crafted every aspect of the portfolio with the goal of maintaining the flexibility, effectiveness, and simplicity of code and design.

## Technologies

This project is made with [React.js](https://react.dev/) using [TypeScript](https://www.typescriptlang.org/) and [Next.js](https://nextjs.org/).

## Project Structure

- `app` contains the app's pages and metadata
- `components` contains common React components used in the app, like the logo and cards
- `containers` contains common React components that help structure the app, like grids and sections
- `views` contains React components for the main views and content of the app, which are made up of components from `components` and `containers`
- `assets` contains photos, logos, and icons displayed throughout the app
- `public` contains static file assets
- `global` contains global variables used across the app
- `utils` contains utility functions used across the app
- `types` contains TypeScript types used across the app
- `package.json` and `package-lock.json` contain information about project scripts and dependencies
- `tsconfig.json` contains TypeScript configuration information
- `.eslintrc.json` contains configuration information for [ESLint](https://eslint.org/) code analysis
- `.prettierrc.json` contains configuration information for [Prettier](https://prettier.io/) code formatting

## Development

To open the app in development mode, run:

```sh
npm install
npm run dev
```

Then, follow the link provided in the terminal to the local web app.

## Deployment

[![CI/CD](https://github.com/ariellevi22/ariellevi22.github.io/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/ariellevi22/ariellevi22.github.io/actions/workflows/ci-cd.yml)

The project is deployed using [GitHub Pages](https://pages.github.com/). Whenever new code is pushed to the repository's `main` branch, GitHub Actions will automatically deploy the updates.
