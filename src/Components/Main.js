/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



import Motd from './Motd';
import Weather from './Weather';

export default class Main extends Component {
  _onPressButton() {
    this.props.navigator.push({
      id: 'Alarm'
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          onPress={this._onPressButton.bind(this)}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.alarm_container}>
            <Text style={styles.alarm_text}>Alarms</Text>
            <Text style={styles.alarm_arrow}>
              <Icon name="chevron-right" size={50} color="#000" />
            </Text>
          </View>
        </TouchableNativeFeedback>
        <Motd />
        <Weather />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
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
