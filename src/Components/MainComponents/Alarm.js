/* @flow */

import React, { Component } from 'react';
import {
  View,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import s from '../../Styles/styles';

export default class Alarm extends Component {
  _onPressButton() {
    this.props.navigator.push({
      id: 'Alarms'
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../Assets/Images/clock.png')}
          resizeMode='cover'
          style={s.backdrop} />
        <View style={s.overlay} />
        <TouchableNativeFeedback
          onPress={this._onPressButton.bind(this)}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.alarmContainer}>
            <Text style={styles.alarmText}>Alarms</Text>
            <Text style={styles.alarmArrow}>
              <Icon name="forward" size={50} color="#d3d3d3" />
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  alarmContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alarmText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#d3d3d3',
    opacity: 1,
    marginLeft: 50,
    textShadowColor: '#111',
    textShadowRadius: 5,
    textShadowOffset: {width: 0, height: 0.5},
  },
  alarmArrow: {
    fontSize: 40,
    fontWeight: 'bold',
    marginRight: 50,
    textShadowColor: '#111',
    textShadowRadius: 5,
    textShadowOffset: {width: 0, height: 0.5},
  },
});
