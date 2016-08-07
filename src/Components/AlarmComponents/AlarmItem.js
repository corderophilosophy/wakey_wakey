/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
} from 'react-native';

import s from '../../Styles/styles';

class AlarmItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false
    };
  }
  _onValueChange(value) {
    this.setState({
      value: value
    });
  }
  render() {
    return (
      <View style={s.alarmItemContainer}>
        <View style={s.alarmTimeContainer}>
          <Text style={s.basicText}>
            {this.props.time}
          </Text>
        </View>
        <View style={s.alarmLabelContainer}>
          <Text style={s.basicText}>
            {this.props.label}
          </Text>
        </View>
        <Switch
          style={s.switch}
          onValueChange={this._onValueChange.bind(this)}
          value={this.state.value}/>
      </View>
    );
  }
}


module.exports = AlarmItem;
