/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import buttonInfo from './Buttons/buttonInfo';
import UseStateDemo from './useState/useStateDemo';
import externalStyling from './UIandStyling/externalStyling';
import textInput from './TextInput/textInput';
import formInput from './TextInput/formInput';
import flatList from './TextInput/flatList';
import mapFunction from './TextInput/mapFunction';
import gridView from './UIandStyling/gridView';

AppRegistry.registerComponent(appName, () => gridView);
