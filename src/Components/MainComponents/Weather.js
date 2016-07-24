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

const STORAGE_KEY = '@wakey_wakey:initialPosition';
const WEATHER_API_KEY = '6ec36da01686fe43dd5540c776619d4b';
const API_STEM = 'http://api.openweathermap.org/data/2.5/';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        temperature: '',
        humidity: '',
        date: '',
        icon: 'day-rain',
      },
      forecast: {
        initialLatitude: '',
        initialLongitude: '',
        currentLatitude: '',
        currentLongitude: '',
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
        lastUpdate: '00:00 p.m.',
        _updateWeather() {
          AsyncStorage.getItem(STORAGE_KEY)
          .then((value) => {
            if (value !== null) {
              this.getWeather(value);
            }
          });
        },
      },
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => {
        AsyncStorage.setItem(STORAGE_KEY, initialPosition)
          .then(() => console.log(`Saved to disk: ${initialPosition}`))
          .catch((error) => console.log(`AsyncStorage error: ${error.message}`))
          .done();
        this._getForecast(initialPosition);
      },
      (error) => {alert(error.message);},
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }
  _getDate() {
    var today = new Date();
    var m = today.getMonth();
    var d = today.getDate();
    return `${m}/${d}`;
  }
  _refreshWeather(response) {
    this.setState({
      weather: {
        temperature: response.main.temp,
        humidty: response.main.humidity,
        date: this._getDate(),
        icon: response.weather[0].icon,
      }
    });
  }
  _getWeather(value) {
    let lat = value.coords.latitude;
    let lon = value.coords.longitude;
    let url = `${API_STEM}weather?lat=${lat}&lon=${lon}&units=imperial&APPID=${WEATHER_API_KEY}`;
    fetch(url)
    .then((response) => {
      this._refreshWeather(response);
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
    let url = `${API_STEM}forecast?lat=${lat}&lon=${lon}&units=imperial&APPID=${WEATHER_API_KEY}`;
    fetch(url)
    .then((response) => { this._updateForecast(response.json());
    });
  }
  _updateForecast(response) {
    var list = response.list;
    var filtered = list.filter((element, index) => {
      return element.dt_txt.match(/(18:00:00)$/gm);
    })
    .map((current, index) => {
      this.setState({
        forecast: {
          date: [
            filtered[0].dt_txt, filtered[1].dt_txt, filtered[2].dt_txt, filtered[3].dt_txt, filtered[4].dt_txt,
          ],
          temperature: [
            filtered[0].main.temp, filtered[1].main.temp, filtered[2].main.temp, filtered[3].main.temp, filtered[4].main.temp,
          ],
          humidity: [
            filtered[0].main.humidty, filtered[1].main.humidty, filtered[2].main.humidty, filtered[3].main.humidty, filtered[4].main.humidty,
          ],
        }
      });
    });
  }
// This should render the 5-day forecast
  render() {
    const temperature = this.state.forecast.temperature;
    const humidity = this.state.forecast.humidity;
    const dates = this.state.forecast.date;
    const icon = this.state.forecast.icon;
    const lastUpdate = this.state.forecast.lastUpdate;
    const temperatureToday = this.state.forecast.temperature[0];
    const humidityToday = this.state.forecast.humidity[0];
    return (
      <View style={styles.weatherView}>
        <IconBar
          _updateForecast={this.state._updateWeather}
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
