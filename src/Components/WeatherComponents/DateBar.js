/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Basic from './BasicComponent';

class DateBar extends Component {
  render() {
    return (
      <View style={styles.dateContainer}>
        <Basic>
         {this.props.dates[0]}
        </Basic>
        <Basic>
         {this.props.dates[1]}
        </Basic>
        <Basic>
         {this.props.dates[2]}
        </Basic>
        <Basic>
         {this.props.dates[3]}
        </Basic>
        <Basic>
          {this.props.dates[4]}
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
});

module.exports = DateBar;
