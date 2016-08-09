/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  TextInput,
  Text,
  Modal,
} from 'react-native';

import s from '../../Styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';


class AddAlarmModal extends Component {
  render() {
    return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => {alert('Modal has been closed.');}} >
        <View style={s.alarmSetupContainer}>
          <View style={s.alarmInnerContainer}>
            <TouchableHighlight
              onPress={this.props.showTimePicker}>
              <View style={s.modalRow}>
                <Icon style={s.timePickerButton}
                  name="clock-o" size={50} color="white"/>
                <Text style={s.timePickerText}>
                {this.props.currentAlarm}
                </Text>
              </View>
            </TouchableHighlight>
            <View style={s.modalRow}>
              <Icon style={s.messageButton}
                name='commenting' size={50} color='white'/>
              <TextInput
                placeholder='Add a message for this alarm...'
                style={s.alarmMessageInput}
                onSubmitEditing={this._handleTextSubmit} />
            </View>
          </View>
        </View>
          <TouchableHighlight onPress={this.props.hideModal}>
            <Text> Hide Modal </Text>
          </TouchableHighlight>
      </Modal>
    </View>
    );
  }
}


module.exports = AddAlarmModal;
