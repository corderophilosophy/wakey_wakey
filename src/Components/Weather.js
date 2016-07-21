/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Widget from './WeatherComponents/WeatherWidget';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        day_1: {
          currentTemp: '88',
          humidity: '88',
          icon: 'hurricane',
        },
        day_2: {
          currentTemp: '88',
          humidity: '88',
          icon: 'day-rain',
        },
        day_3: {
          currentTemp: '88',
          humidity: '88',
          icon: 'hurricane',
        },
        day_4: {
          currentTemp: '88',
          humidity: '88',
          icon: 'night-clear',
        },
        day_5: {
          currentTemp: '88',
          humidity: '88',
          icon: 'night-hail',
        },
      }
    };
  }
// This should render the 5-day forecast
  render() {
    return (
      <View style={styles.weatherView}>
        <View style={styles.widgetBox}>
          <Widget
            temperature={this.state.weather.day_1.currentTemp}
            humidity={this.state.weather.day_1.humidity}
            icon={this.state.weather.day_1.icon}
             />
          <Widget
            temperature={this.state.weather.day_2.currentTemp}
            humidity={this.state.weather.day_2.humidity}
            icon={this.state.weather.day_2.icon}
             />
          <Widget
            temperature={this.state.weather.day_3.currentTemp}
            humidity={this.state.weather.day_3.humidity}
            icon={this.state.weather.day_3.icon}
             />
          <Widget
            temperature={this.state.weather.day_4.currentTemp}
            humidity={this.state.weather.day_4.humidity}
            icon={this.state.weather.day_4.icon}
             />
          <Widget
            temperature={this.state.weather.day_5.currentTemp}
            humidity={this.state.weather.day_5.humidity}
            icon={this.state.weather.day_5.icon}
             />
        </View>
        <View style={styles.updateTextContainer}>
          <Text style={styles.updateText}>Update available every 2 hours</Text>
          <Text style={styles.updateText}>Last update was at: </Text>
        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  weatherView: {
    flex: 2,
    backgroundColor: '#369',
    borderTopColor: '#343434',
    borderTopWidth: 5,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  widgetBox: {
    flex: 4,
    backgroundColor: '#222',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  updateTextContainer: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  updateText: {
    flex: 1,
    fontWeight: '800',
  }
});

module.exports = Weather;
