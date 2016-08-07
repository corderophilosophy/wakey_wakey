/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  AsyncStorage,
} from 'react-native';

import IconBar from '../WeatherComponents/IconBar';
import FetchWeather from '../../Utilities/FetchWeather';

import s from '../../Styles/styles';


class Weather extends Component {
  render() {
    return (
      <View style={styles.weatherView}>
        <Image source={require('../../Assets/Images/dock.jpg')}
          resizeMode='cover'
          style={s.backdrop} />
        <View style={s.overlay} />
        <IconBar
          refreshWeather={this.props.update}
          name={this.props.name}
          temperatureToday={this.props.temperature}
          humidityToday={this.props.humidity} />
        <View style={styles.updateTextContainer}>
          <Text style={styles.updateText}>Last update was at: {this.props.lastUpdate}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  weatherView: {
    flex: 4,
    backgroundColor: '#002147',
  },
  updateTextContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#002147',
  },
  updateText: {
    paddingTop: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#d3d3d3',
    textAlignVertical: 'center',
  },
});

module.exports = Weather;
