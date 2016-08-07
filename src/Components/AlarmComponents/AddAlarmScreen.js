/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import s from '../../Styles/styles';

class AddAlarmScreen extends Component {
  render() {
    return (
    <View style={s.addAlarmScreenContainer}>
      <Text style={s.mainText}>
        I'm the AddAlarmScreen!
      </Text>
    </View>
    );
  }
}


module.exports = AddAlarmScreen;
