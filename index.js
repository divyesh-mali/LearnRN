/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import buttonInfo from './Buttons/buttonInfo';
import UseStateDemo from './useState/useStateDemo';
import externalStyling from './UIandStyling/externalStyling';
import textInput from './ListsAndTextInput/textInput';
import formInput from './ListsAndTextInput/formInput';
import flatList from './ListsAndTextInput/flatList';
import mapFunction from './ListsAndTextInput/mapFunction';
import gridView from './UIandStyling/gridView';
import componentLoop from './ListsAndTextInput/componentLoop';

AppRegistry.registerComponent(appName, () => componentLoop);
