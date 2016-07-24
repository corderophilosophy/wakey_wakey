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

class DateBar extends Component {
  render() {
    return (
      <View style={styles.dateContainer}>
        <Basic>
         <Text style={s.basicText}>{this.props.dates[0]}</Text>
        </Basic>
        <Basic>
          <Text style={s.basicText}>{this.props.dates[1]}</Text>
        </Basic>
        <Basic>
          <Text style={s.basicText}>{this.props.dates[2]}</Text>
        </Basic>
        <Basic>
          <Text style={s.basicText}>{this.props.dates[3]}</Text>
        </Basic>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dateContainer: {
    flex: .75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  // dateText: {
  //   textShadowColor: 'red',
  //   textShadowRadius: 0,
  //   textShadowOffset: {width: 0, height: 0},
  // },
});

module.exports = DateBar;
