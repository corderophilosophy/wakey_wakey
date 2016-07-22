/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Basic from './BasicComponent';

class HumidityBar extends Component {
  render() {
    return (
      <View style={styles.humidityContainer}>
        <Basic>
         {this.props.humidity[0]}%
        </Basic>
        <Basic>
         {this.props.humidity[1]}%
        </Basic>
        <Basic>
         {this.props.humidity[2]}%
        </Basic>
        <Basic>
         {this.props.humidity[3]}%
        </Basic>
        <Basic>
          {this.props.humidity[4]}%
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
