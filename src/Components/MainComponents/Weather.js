/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import IconBar from '../WeatherComponents/IconBar';
import TemperatureBar from '../WeatherComponents/TemperatureBar';
import TemperatureLabel from '../WeatherComponents/TemperatureLabel';
import HumidityBar from '../WeatherComponents/HumidityBar';
import HumidityLabel from '../WeatherComponents/HumidityLabel';
import DateBar from '../WeatherComponents/DateBar';
import DateLabel from '../WeatherComponents/DateLabel';

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
        icon: 'day-rain',
        lastUpdate: '00:00 p.m.',
      }
    };
  }
// This should render the 5-day forecast
  render() {
    const temperature = this.state.weather.temperature;
    const humidity = this.state.weather.humidity;
    const dates = this.state.weather.date;
    const icon = this.state.weather.icon;
    const lastUpdate = this.state.weather.lastUpdate;
    const temperatureToday = this.state.weather.temperature[0];
    const humidityToday = this.state.weather.humidity[0];
    return (
      <View style={styles.weatherView}>
        <IconBar
          name={icon}
          temperatureToday={temperatureToday}
          humidityToday = {humidityToday} />
        <DateLabel />
        <DateBar dates={dates}/>
        <TemperatureLabel />
        <TemperatureBar
         temperature={temperature} />
        <HumidityLabel />
        <HumidityBar
          humidity={humidity} />
        <View style={styles.updateTextContainer}>
          <Text style={styles.updateText}>Update available every 2 hours</Text>
          <Text style={styles.updateText}>Last update was at: {lastUpdate}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  weatherView: {
    flex: 4,
    backgroundColor: '#d3d3d3',
  },
  updateTextContainer: {
    flex: 1,
    paddingTop: 8,
    backgroundColor: '#002147',
  },
  updateText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#d3d3d3',
  }
});

module.exports = Weather;
