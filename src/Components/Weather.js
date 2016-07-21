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
        day_1: {
          currentTemp: 88,
          humidity: 88,
          icon: 'icon-day-cloudy',
        },
        day_2: {
          currentTemp: 88,
          humidity: 88,
          icon: 'day-rain',
        },
        day_3: {
          currentTemp: 88,
          humidity: 88,
          icon: 'hurricane',
        },
        day_4: {
          currentTemp: 88,
          humidity: 88,
          icon: 'day-storm',
        },
        day_5: {
          currentTemp: 88,
          humidity: 88,
          icon: 'night-hail',
        },
      }
    };
  }
// This should render the 5-day forecast
  render() {
    return (
      <View style={styles.weather_view}>
        <View style={styles.widget_box}>
          <Widget
            temperature={this.state.weather.day_1.currentTemp}
            humidty={this.state.weather.day_1.humidity}
            icon={this.state.weather.day_1.icon}
             />
          <Widget
            temperature={this.state.weather.day_2.currentTemp}
            humidty={this.state.weather.day_2.humidity}
            icon={this.state.weather.day_2.icon}
             />
          <Widget
            temperature={this.state.weather.day_3.currentTemp}
            humidty={this.state.weather.day_3.humidity}
            icon={this.state.weather.day_3.icon}
             />
          <Widget
            temperature={this.state.weather.day_4.currentTemp}
            humidty={this.state.weather.day_4.humidity}
            icon={this.state.weather.day_4.icon}
             />
          <Widget
            temperature={this.state.weather.day_5.currentTemp}
            humidty={this.state.weather.day_5.humidity}
            icon={this.state.weather.day_5.icon}
             />
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
