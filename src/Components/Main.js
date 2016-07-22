/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
  Image,
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
            <Image
              source={require('../Assets/Images/clock.png')}
              style={styles.backdrop}
              resizeMode='cover'>
              <View style={styles.overlay}>
                <Text style={styles.alarmText}>Alarms</Text>
                <Text style={styles.alarmArrow}>
                  <Icon name="forward" size={50} color="#000" />
                </Text>
              </View>
            </Image>
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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column',
    opacity: 0.5,
  },
  overlay: {
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
