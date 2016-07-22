/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class TemperatureLabel extends Component {
  render() {
    return (
      <View style={styles.temperatureLabelContainer}>
        <Text style={styles.temperatureLabelText}>Temperature</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  temperatureLabelContainer: {
    alignItems: 'stretch',
    backgroundColor: 'rgb(144, 17, 167)',
  },
  temperatureLabelText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#F7FFF7',
  },
});

module.exports = TemperatureLabel;
