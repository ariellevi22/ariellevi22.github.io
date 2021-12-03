# Development Information for alevi22.github.io

## Accessing the Project

View the finished product at [alevi22.github.io](https://alevi22.github.io).

## Technologies

This project is made with [React.js](https://reactjs.org/) using [TypeScript](https://www.typescriptlang.org/). For styling, it uses [JSS](https://cssinjs.org/react-jss) (CSS in JavaScript).

The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Find the [Create React App guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) here.

## Development

To run the app in development mode, run:

```sh
npm install
npm start
```

Then, open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits, and you will also see any lint errors in the console.

## Deployment

Every time new changes are added to the project, they must be deployed in order to be available on [alevi22.github.io](https://alevi22.github.io). Simply committing and pushing the changes to GitHub will not deploy them. To deploy the project, run:

```sh
npm run deploy
```

The project is deployed using [GitHub Pages](https://pages.github.com/). As a reminder, here is how GitHub Pages deployment was set up:

### Step 1: Add `homepage` to `package.json`

Open your `package.json` and add a `homepage` field for your project:

```json
"homepage": "https://alevi22.github.io",
```

Create React App uses the `homepage` field to determine the root URL in the built HTML file.

### Step 2: Install `gh-pages` and add `deploy` to `scripts` in `package.json`

Now, whenever you run `npm run build`, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish the project at [alevi22.github.io](https://alevi22.github.io), run:

```sh
npm install --save gh-pages
```

Keep the repository's source branch as `main`, and create a new branch called `deployed`. Add the following scripts in your `package.json`:

```diff
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -b deployed -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

### Step 3: Deploy the site by running `npm run deploy`

Run the following:

```sh
npm run deploy
```

The `predeploy` script (defined in the step above) will run automatically before `deploy` is run. The only thing the `predeploy` script does is run the `build` script, which builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. Then, `deploy` runs to make these changes available to GitHub Pages.

By default, the production build is a fully functional, offline-first [Progressive Web App](https://developers.google.com/web/progressive-web-apps/). Progressive Web Apps are faster and more reliable than traditional web pages, and they provide an engaging mobile experience.

### Step 4: Ensure your project’s settings use `gh-pages`

Finally, make sure the GitHub Pages option in your GitHub project settings is set to use the `deployed` branch.

### Step 5: Optionally, configure the domain

You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder or by adding a custom domain in the Pages tab of your GitHub project settings.

## Any Questions?

Please contact me through my website with any other questions.