/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var vipApp = require('./Vip/vipApp');
import vipFluxApp from './Flux/vipFluxApp';


AppRegistry.registerComponent('suyunApp', () => vipFluxApp);
