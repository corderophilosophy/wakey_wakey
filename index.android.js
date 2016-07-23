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

const WEATHER_API_KEY = '';
const API_STEM = 'http://api.openweathermap.org/data/2.5/weather?';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     weather: {
  //       currentTemp: 0,
  //       humidity: 0,
  //       icon: null,
  //       lastUpdate: '',
  //     },
  //   };
  // }
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
        renderScene={this._renderScene} />
    );
  }
}


AppRegistry.registerComponent('wakey_wakey', () => App);
