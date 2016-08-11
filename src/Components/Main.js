/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';

import PushNotification from 'react-native-push-notification';

import Alarm from './MainComponents/Alarm';
import Motd from './MainComponents/Motd';
import Weather from './MainComponents/Weather';

const WEATHER_API_KEY = 'fd606b3e7f38aebcac948c035d514b00';
const API_STEM = 'http://api.openweathermap.org/data/2.5/weather?';

var _count = 0;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
      lastUpdate: '',
      location: [],
    };
  }
  // componentDidMount() {
  //   this._updateData();
  // }
  _updateData() {
    _count += 1;
    console.log(`count is now: ${_count}`);
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => {
        this._onReceiveLocation(initialPosition.coords.latitude, initialPosition.coords.longitude);
      },
      (error) => {alert(error.message);},
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    console.log('_getLocation finishing');
  }
  _onReceiveLocation(lat, lon) {
    this._getWeather(
      `${API_STEM}lat=${lat}&lon=${lon}&units=imperial&appid=${WEATHER_API_KEY}`
    );
  }
  _iconFilter(weatherCodeObject) {
    if (weatherCodeObject.id == '900') {
      return 'tornado';
    } else if (weatherCodeObject.id == '901' || weatherCodeObject.id == '902') {
      return 'hurricane';
    }
   else {
      switch(weatherCodeObject.icon) {
      case '01d':
        return 'day-sun';
      case '01n':
        return 'night-clear';
      case '02d':
        return 'day-partly-cloudy';
      case '02n':
        return 'night-cloudy';
      case '03d':
        return 'day-cloudy';
      case '03n':
        return 'night-cloudy';
      case '04d':
        return 'day-partly-cloudy';
      case '04n':
        return 'night-cloudy';
      case '09d':
        return 'day-showers';
      case '09n':
        return 'night-shower';
      case '10d':
        return 'day-rain';
      case '10n':
        return 'night-rain';
      case '11d':
        return 'day-storm';
      case '11n':
        return 'night-storm';
      case '13d':
        return 'day-snow';
      case '13n':
        return 'night-snow';
      case '50d':
        return 'day-fog';
      case '50n':
        return 'night-fog';
      default:
        return 'glyph-227';
      }
    }
  }
  _getWeather(url, cb) {
    fetch(url)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        let ico = this._iconFilter(responseJSON.weather[0]);
        let date = this._formatDate(responseJSON.dt);
        this.setState({
          weather: {
            temperature: Math.round(responseJSON.main.temp),
            humidity: Math.round(responseJSON.main.humidity),
            icon: ico,
            lastUpdate: date,
          }
        });
        console.log(`icon is: ${ico}`);
      })
      .catch((error) => console.warn(error));
  }
  _formatDate(dt) {
    let sec = dt;
    let date = new Date(sec * 1000);
    return date.toLocaleTimeString();
  }
  render() {
    return (
      <View style={styles.container}>
        <Alarm navigator={this.props.navigator} />
        <View style={styles.mwContainer}>
          <Motd />
          <Weather
            update={this._updateData.bind(this)}
            name={this.state.weather.icon}
            temperature={this.state.weather.temperature}
            humidity={this.state.weather.humidity}
            lastUpdate={this.state.weather.lastUpdate}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  // alarmContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   backgroundColor: 'dodgerblue',
  // },
  mwContainer: {
    flex: 3,
  },
  // alarmText: {
  //   fontSize: 60,
  //   fontWeight: 'bold',
  //   color: '#000000',
  //   marginLeft: 50,
  // },
  // alarmArrow: {
  //   fontSize: 40,
  //   fontWeight: 'bold',
  //   marginRight: 50,
  // },
});

module.exports = Main;
