/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import IconBar from './WeatherComponents/IconBar';
import TemperatureBar from './WeatherComponents/TemperatureBar';
import TemperatureLabel from './WeatherComponents/TemperatureLabel';
import HumidityBar from './WeatherComponents/HumidityBar';
import HumidityLabel from './WeatherComponents/HumidityLabel';
import DateBar from './WeatherComponents/DateBar';
import DateLabel from './WeatherComponents/DateLabel';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        date: [
          '00/00',
          '00/00',
          '00/00',
          '00/00',
          '00/00',
        ],
        icons: [
          "day-rain",
          "hurricane",
          "tornado",
          "smog",
          "night-clear",
        ],
        temperature: [
          "88",
          "88",
          "88",
          "88",
          "88",
        ],
        humidity: [
          "88",
          "88",
          "88",
          "88",
          "88",
        ],
        lastUpdate: '00:00 p.m.',
      }
    };
  }
// This should render the 5-day forecast
  render() {
    return (
      <View style={styles.weatherView}>
        <IconBar
          name={this.state.weather.icons} />
        <DateLabel />
        <DateBar dates={this.state.weather.date}/>
        <TemperatureLabel />
        <TemperatureBar
         temperature={this.state.weather.temperature} />
        <HumidityLabel />
        <HumidityBar
          humidity={this.state.weather.humidity} />
        <View style={styles.updateTextContainer}>
          <Text style={styles.updateText}>Update available every 2 hours</Text>
          <Text style={styles.updateText}>Last update was at: {this.state.weather.lastUpdate}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  weatherView: {
    flex: 4,
  },
  updateTextContainer: {
    flex: 1,
    backgroundColor: 'pink',
  },
  updateText: {
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

module.exports = Weather;
