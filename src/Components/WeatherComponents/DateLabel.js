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
  },
  dateBarText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    textDecorationLine: 'underline',
  },
});

module.exports = DateBar;
