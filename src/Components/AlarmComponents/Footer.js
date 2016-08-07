import React, { Component } from 'react';

import {
  Text,
  View
} from 'react-native';

import s from '../../Styles/styles';
import AddAlarmButton from './AddAlarmButton';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={s.footerContainer}>
        <AddAlarmButton alarmAdd={this.props.addAlarm} />
      </View>
    );
  }
}

module.exports = Footer;
