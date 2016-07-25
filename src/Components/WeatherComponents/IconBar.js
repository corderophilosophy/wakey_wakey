/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
} from 'react-native';

import Basic from './BasicComponent';
import s from '../../Styles/styles';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../Data/config.json';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Icon = createIconSetFromFontello(fontelloConfig);

// console.log(this.props);
class IconBar extends Component {
  _onPressButton() {
    this.props._updateWeather;
  }
  render() {
    return (
      <View style={styles.iconContainer}>
        <Basic>
          <Text style={s.iconShadow}>
            <Icon
              name={this.props.name}
              size={50}
              color='#002147' />
          </Text>
        </Basic>
        <View style={styles.iconBarTemperatureContainer}>
          <Text style={[s.basicText, s.today]}>
            {this.props.temperatureToday}&deg;F
          </Text>
        </View>
        <View style={styles.iconBarHumidityContainer}>
          <Text style={[s.basicText, s.today]}>
            {this.props.humidityToday}%
          </Text>
        </View>
        <Basic>
          <TouchableNativeFeedback
            onPress={this._onPressButton.bind(this)}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <Text>
              <FontAwesome
                name='refresh'
                color='#002147'
                size={50} />
            </Text>
          </TouchableNativeFeedback>
        </Basic>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  iconContainer: {
    flex: 2,
    flexDirection: 'row',
    // alignItems: 'center',
  },
  iconBarTemperatureContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBarHumidityContainer: {
    flex: 1,
  },
});

module.exports = IconBar;
