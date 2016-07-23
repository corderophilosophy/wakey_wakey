/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Basic from './BasicComponent';
import s from '../../Styles/styles';

class Temperature extends Component {
  render() {
    return (
      <View style={styles.temperatureContainer}>
        <Basic>
          <Text style={s.basicText}>{this.props.temperature[0]}&deg;F</Text>
        </Basic>
        <Basic>
          <Text style={s.basicText}>{this.props.temperature[1]}&deg;F</Text>
        </Basic>
        <Basic>
          <Text style={s.basicText}>{this.props.temperature[2]}&deg;F</Text>
        </Basic>
        <Basic>
          <Text style={s.basicText}>{this.props.temperature[3]}&deg;F</Text>
        </Basic>
        <Basic>
          <Text style={s.basicText}>{this.props.temperature[4]}&deg;F</Text>
        </Basic>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  temperatureContainer: {
    flex: .75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = Temperature;
