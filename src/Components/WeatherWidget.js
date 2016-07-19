/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class WeatherWidget extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
        </View>
        <Text style={styles.temp}>{this.props.temperature}&#176;</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(70,70,70,0.7)',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    height: 70,
    width: 70,
    backgroundColor: 'pink',
  },
  temp: {
    backgroundColor: 'black',
    color: 'yellow',
    fontSize: 20,
    textAlign: 'center',
  }
});
