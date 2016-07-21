/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class MyComponent extends Component {
  render() {
    return (
      <View style={styles.humidityBarContainer}>
        <Text style={styles.humidtyBarText}>Humidity</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  humidityBarContainer: {
    alignItems: 'stretch',
    backgroundColor: 'rgb(164, 217, 244)',
  },
  humidtyBarText: {
    fontSize: 18,
    color: '#F7FFF7',
  },
});

module.exports = MyComponent;
