/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class DateBar extends Component {
  render() {
    return (
      <View style={styles.dateBarContainer}>
        <Text style={styles.dateBarText}>Date</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dateBarContainer: {
    alignItems: 'stretch',
    backgroundColor: 'rgb(108, 234, 6)',
  },
  dateBarText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#F7FFF7',
  },
});

module.exports = DateBar;
