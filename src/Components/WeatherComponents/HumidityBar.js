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

class HumidityBar extends Component {
  render() {
    return (
      <View style={styles.humidityContainer}>
        <Basic>
          <Text style={s.basicText}>{this.props.humidity[0]}%</Text>
        </Basic>
        <Basic>
          <Text style={s.basicText}>{this.props.humidity[1]}%</Text>
        </Basic>
        <Basic>
          <Text style={s.basicText}>{this.props.humidity[2]}%</Text>
        </Basic>
        <Basic>
          <Text style={s.basicText}>{this.props.humidity[3]}%</Text>
        </Basic>
        <Basic>
          <Text style={s.basicText}>{this.props.humidity[4]}%</Text>
        </Basic>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  humidityContainer: {
    flex: .75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

module.exports = HumidityBar;
