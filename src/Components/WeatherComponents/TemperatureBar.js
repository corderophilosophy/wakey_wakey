/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Basic from './BasicComponent';

class Temperature extends Component {
  render() {
    return (
      <View style={styles.temperatureContainer}>
        <Basic>
         {this.props.temperature[0]}&deg;F
        </Basic>
        <Basic>
         {this.props.temperature[1]}&deg;F
        </Basic>
        <Basic>
         {this.props.temperature[2]}&deg;F
        </Basic>
        <Basic>
         {this.props.temperature[3]}&deg;F
        </Basic>
        <Basic>
          {this.props.temperature[4]}&deg;F
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
