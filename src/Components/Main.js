/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';



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
          <View style={styles.alarmContainer}>
            <Text style={styles.alarmText}>Alarms</Text>
            <Text style={styles.alarmArrow}>
              <Icon name="forward" size={50} color="#000" />
            </Text>
          </View>
        </TouchableNativeFeedback>
        <View style={styles.mwContainer}>
          <Motd />
          <Weather />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  alarmContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'dodgerblue',
  },
  mwContainer: {
    flex: 3,
  },
  alarmText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 50,
  },
  alarmArrow: {
    fontSize: 40,
    fontWeight: 'bold',
    marginRight: 50,
  },
});
