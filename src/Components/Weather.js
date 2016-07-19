/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Weather extends Component {
  render() {
    return (
      <View style={styles.weather_container}>
        <Text>I'm the Weather component</Text>
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    weather_container: {
      flex: 2,
      backgroundColor: 'pink',
      borderTopColor: '#333',
      borderTopWidth: 5,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

module.exports = Weather;
