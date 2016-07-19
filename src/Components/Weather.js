/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Widget from './WeatherWidget';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        currentTemp: 0,
        humidity: 0,
        image: null,
      },
      lastUpdate: '',
    };
  }
// This should render the 5-day forecast
  render() {
    return (
      <View style={styles.weather_view}>
        <View style={styles.widget_box}>
          <Widget temperature={this.state.weather.currentTemp} />
        </View>
        <Text style={styles.update_text}>Update available every 2 hours</Text>
        <Text style={styles.update_text}>Last update was at: </Text>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  weather_view: {
    flex: 2,
    backgroundColor: '#78edff',
    borderTopColor: '#333',
    borderTopWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  widget_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  update_text: {
    fontWeight: '800',
  }
});

module.exports = Weather;
