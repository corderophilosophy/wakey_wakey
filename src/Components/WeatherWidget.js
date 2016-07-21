/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../Data/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

export default class WeatherWidget extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <Text style={styles.text}>
            <Icon name={this.props.icon} size={50} color="#000" />
          </Text>
        </View>
        <Text style={styles.temp}>&#176;</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(70,70,70,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  temp: {
    backgroundColor: 'black',
    color: 'yellow',
    fontSize: 20,
    textAlign: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});
