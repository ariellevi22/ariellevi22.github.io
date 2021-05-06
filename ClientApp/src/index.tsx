import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import * as registerServiceWorker from './registerServiceWorker';

// Import icons and make available to all files of the app
// Reference: https://fontawesome.com/how-to-use/on-the-web/using-with/react
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
registerServiceWorker.unregister();