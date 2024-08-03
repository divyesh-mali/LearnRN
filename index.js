/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import buttonInfo from './Buttons/buttonInfo';
import UseStateDemo from './useState/useStateDemo';
import externalStyling from './ExternalStyling/externalStyling';

AppRegistry.registerComponent(appName, () => externalStyling);
