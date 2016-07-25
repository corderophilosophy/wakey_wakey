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

const STORAGE_KEY = '@wakey_wakey:location';
const WEATHER_API_KEY = 'fd606b3e7f38aebcac948c035d514b00';
const API_STEM = 'http://api.openweathermap.org/data/2.5/';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialLatitude: '',
      initialLongitude: '',
      currentLatitude: '',
      currentLongitude: '',
      weather: {
        temperature: '',
        humidity: '',
        date: '',
        icon: '',
      },
      forecast: { //this.state.forecast
        days: [ //this.state.forecast.days
          {   //this.state.forecast.days.day0
            temperature: '',  //this.state.forecast.days.day0.temperature
            humidity: '',
          },
          {
            temperature: '',
            humidity: '',
          },
          {
            temperature: '',
            humidity: '',
          },
          {
            temperature: '',
            humidity: '',
          },
          {
            temperature: '',
            humidity: '',
          },
        ],
        lastUpdate: '',
      },
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => {
        this.setState({
          initialLatitude: initialPosition.coords.latitude,
          initialLongitude: initialPosition.coords.longitude,
        });
        var location = JSON.stringify(`${initialPosition.coords.latitude},${initialPosition.coords.longitude}`);
        AsyncStorage.setItem(STORAGE_KEY, location)
          .then(() => console.log(`Saved to disk: ${initialPosition}`))
          .catch((error) => console.log(`AsyncStorage error: ${error.message}`))
          .done();
        this._getForecast(initialPosition);
      },
      (error) => {alert(error.message);},
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }
  _updateWeather() {
    AsyncStorage.getItem(STORAGE_KEY)
    .then((value) => {
      if (value !== null) {
        console.log(this);
        this._getWeather(value);
      }
    });
  }
  _getDate() {
    var today = new Date();
    var m = today.getMonth();
    var d = today.getDate();
    return `${m}/${d}`;
  }
  _getWeather(value) {
    console.log(`_getWeather is running now.`);
    let lat = 30;
    let lon = 84;
    let url = `${API_STEM}weather?lat=${lat}&lon=${lon}&units=imperial&APPID=${WEATHER_API_KEY}`;
    fetch(url)
    .then((response) => response.json())
    .then((responseJSON) => {
      this.setState({
        weather: {
          temperature: responseJSON.main.temp,
          humidty: responseJSON.main.humidity,
          date: this._getDate(),
          icon: 'day-rain' //response.weather[0].icon,
        }
      });
    });
  }
  _formatDate(date) {
    var m = date.slice(5,7);
    var d = date.slice(8,10);
    return [m,d];
  }
  _getForecast(initialPosition) {
    let lat = initialPosition.coords.latitude;
    let lon = initialPosition.coords.longitude;
    let url = `${API_STEM}forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${WEATHER_API_KEY}`;
    fetch(url)
    .then((response) => response.json())
    .then((responseJSON) => {
      this._updateForecast(responseJSON);
    })
    .catch((error) => {
      console.warn(error);
    });
  }
  _updateForecast(response) {
    var list = response.list;
    console.log(response);
    var filtered = list.filter((element, index) => {
      return element.dt_txt.match(/(18:00:00)$/gm);
    });
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
