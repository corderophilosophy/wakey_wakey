/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class AlarmSetup extends Component {
  render() {
    return (
    <View styles={styles.alarmSetupContainer}>
      <View styles={styles.timePickerRow}>
        <TouchableHighlight
          onPress={this.props.showTimePicker}>
          <Icon style={styles.timePickerButton}
            name="clock-o" size={50} color="white"/>
        </TouchableHighlight>
      </View>
      <View styles={styles.alarmMessageRow}>
        <Icon style={styles.messageButton}
          name='commenting' size={50} color='white'/>
        {/* <TextInput
          style={styles.input}
          onSubmitEditing={this._handleTextSubmit} /> */}
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  alarmSetupContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  }
});

module.exports = AlarmSetup;
