/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
} from 'react-native';

import IconBar from '../WeatherComponents/IconBar';
import TemperatureBar from '../WeatherComponents/TemperatureBar';
import TemperatureLabel from '../WeatherComponents/TemperatureLabel';
import HumidityBar from '../WeatherComponents/HumidityBar';
import HumidityLabel from '../WeatherComponents/HumidityLabel';
import DateBar from '../WeatherComponents/DateBar';
import DateLabel from '../WeatherComponents/DateLabel';
import FetchWeather from '../WeatherComponets/FetchWeather';

const LATITUDE = '@wakey_wakey:latitude';
const LONGITUDE = '@wakey_wakey:longitude';
const WEATHER_API_KEY = 'fd606b3e7f38aebcac948c035d514b00';
const API_STEM = 'http://api.openweathermap.org/data/2.5/';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        temperature: '',
        humidity: '',
        date: '',
        icon: '',
      },
      forecast: {
        days: {},
      },
      lastUpdate: '',
    };
  }
  componentDidMount() {
    var location = FetchWeather.getLocation();
    AsyncStorage.multiSet([
        [LATITUDE, location.initialLatitude],
        [LONGITUDE, location.initialLongitude]
    ], (error) => {
      console.warn(error);
    }
    );
  }

// This should render the 5-day forecast
  render() {
    const temperature = this.state.forecast.temperature;
    const humidity = this.state.forecast.humidity;
    const dates = this.state.forecast.date;
    const icon = this.state.weather.icon;
    const lastUpdate = this.state.forecast.lastUpdate;
    const temperatureToday = this.state.weather.temperature;
    const humidityToday = this.state.weather.humidity;
    return (
      <View style={styles.weatherView}>
        <IconBar
          _updateWeather={this._updateWeather()}
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
