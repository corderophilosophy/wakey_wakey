/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Alarms from './Alarms';
import Motd from './Motd';
import Weather from './Weather';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Alarms />
        <Motd />
        <Weather />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
