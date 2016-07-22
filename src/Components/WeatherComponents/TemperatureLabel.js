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
  },
  temperatureLabelText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    textDecorationLine: 'underline',
  },
});

module.exports = TemperatureLabel;
