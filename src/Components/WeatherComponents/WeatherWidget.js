/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../Data/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

export default class WeatherWidget extends Component {
  // TODO: Break this up into separate components:
  // Icon, Temperature, Humidity
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Text style={styles.weatherIconFont}>
            <Icon name={this.props.icon} size={50} color="#F7FFF7" />
          </Text>
        </View>
        <View style={styles.temperatureContainer}>
          <Text style={styles.temperatureText}>
            {this.props.temperature}
            &deg;F
          </Text>
        </View>
        <View style={styles.humidityContainer}>
          <Text style={styles.humidityText}>
            {this.props.humidity}%
          </Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
  },
  weatherIconFont: {
    textAlign: 'center',
    flex: 1,
  },
  temperatureContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 60,
  },
  temperatureText: {
    flex: 1,
    color: '#F7FFF7',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconContainer: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  humidityContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
  },
  humidityText: {
    color: 'white',
    fontSize: 20,
  },
});
