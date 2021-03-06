/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
  AppRegistry,
} from 'react-native';

import Main from './src/Components/Main';
import Alarms from './src/Components/Alarms';
import AddAlarmModal from  './src/Components/AlarmComponents/AddAlarmModal';

const WEATHER_API_KEY = '';
const API_STEM = 'http://api.openweathermap.org/data/2.5/weather?';

class App extends Component {
  _renderScene(route, navigator) {
    var _navigator = navigator;
    switch (route.id) {
    case 'Main':
      return(<Main navigator={navigator} title="Main" />);
    case 'Alarms':
      return(<Alarms navigator={navigator} title="Alarms" />);
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{
          id: 'Main',
        }}
        renderScene={this._renderScene}
        configureScene={(route, routeStack) => {
          switch(route.id) {
          case 'Main':
            return Navigator.SceneConfigs.FloatFromLeft;
          case 'Alarms':
            return Navigator.SceneConfigs.FloatFromRight;
          }
        }}/>
    );
  }
}


AppRegistry.registerComponent('wakey_wakey', () => App);
