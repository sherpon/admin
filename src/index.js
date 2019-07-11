const pkg = require('../package.json');

import './utilities/viewportUnits';
import './firebase/firebaseInit';
import './containers/app.jsx';
import './styles/index.scss';

console.log('APP_NAME: ', process.env.APP_NAME);
console.log('VERSION: ', pkg.version);