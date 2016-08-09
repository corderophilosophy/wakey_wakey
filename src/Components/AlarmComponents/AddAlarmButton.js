/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  TouchableNativeFeedback,
  Text,
} from 'react-native';

import s from '../../Styles/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

class AddAlarmButton extends Component {
  render() {
    return (
      <TouchableNativeFeedback
        onPress={this.props.openModal}
        background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={s.alarmButtonContainer}>
            <Icon style={[s.addAlarmButton]} name="alarm-add" size={50} color="white"/>
          </View>
      </TouchableNativeFeedback>

    );
  }
}

module.exports = AddAlarmButton;
