/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
} from 'react-native';

class Alarms extends Component {
  render() {
    return (
    <TouchableNativeFeedback
      onPress={this._onPressButton}
      background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={styles.alarm_container}>
        <Text style={styles.alarm_text}>Alarms</Text>
        <Text style={styles.alarm_arrow}>></Text>
      </View>
    </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  alarm_container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  alarm_text: {
    marginLeft: 50,
    fontSize: 60,
  },
  alarm_arrow: {
    marginRight: 50,
    fontSize: 60,
  },
});

module.exports = Alarms;
