/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<View style={styles.alarm_container}>
          <Text style={styles.alarm_text}>ALARM</Text>
        </View>
        <View style={styles.weather_container}>
          <Text style={styles.weather_text}>ALARM</Text>
        </View> TODO: Refactor into separate components*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  alarm_container: {
    backgroundColor: '#e345a0',
    padding: 50,
  },
  alarm_text: {
    fontSize: 20,
    color: 'yellow',
    fontFamily: 'Helvetica',
    fontWeight: '800',
  },
});
