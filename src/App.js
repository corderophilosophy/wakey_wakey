/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Switch from './Components/HomeSwitch';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Switch />
        <Switch />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
