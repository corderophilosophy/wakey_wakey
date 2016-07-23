/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';

import Alarm from './MainComponents/Alarm';
import Motd from './MainComponents/Motd';
import Weather from './MainComponents/Weather';

export default class Main extends Component {
  _onPressButton() {
    this.props.navigator.push({
      id: 'Alarm'
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Alarm navigator={navigator} />
        <View style={styles.mwContainer}>
          <Motd />
          <Weather />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  // alarmContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   backgroundColor: 'dodgerblue',
  // },
  mwContainer: {
    flex: 3,
  },
  // alarmText: {
  //   fontSize: 60,
  //   fontWeight: 'bold',
  //   color: '#000000',
  //   marginLeft: 50,
  // },
  // alarmArrow: {
  //   fontSize: 40,
  //   fontWeight: 'bold',
  //   marginRight: 50,
  // },
});
