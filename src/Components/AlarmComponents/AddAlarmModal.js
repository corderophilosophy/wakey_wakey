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

import Icon from 'react-native-vector-icons/FontAwesome';

import s from '../../Styles/styles';

class AddAlarmModal extends Component {
  render () {
    return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={ () => { alert('Modal has been closed.');} } >
        <View style={s.alarmSetupContainer}>
          <View style={s.alarmInnerContainer}>
            <View style={s.modalRow}>
              <Icon style={s.messageButton}
                name='commenting' size={50} color='white'/>
              <TextInput
                placeholder='Add a message for this alarm...'
                style={s.alarmMessageInput}
                onSubmitEditing={this.props.handleMessageSubmit} />
            </View>
            <TouchableHighlight
              onPress={this.props.showTimePicker}>
              <View style={s.modalRow}>
                <Icon style={s.timePickerButton}
                  name="clock-o" size={50} color="white"/>
                <Text style={s.timePickerText}>
                  {this.props.time}
                </Text>
              </View>
            </TouchableHighlight>
            <View style={s.addAlarmActionButtons}>
              <TouchableHighlight onPress={this.props.handleAlarmSubmit}>
                <Icon style={s.submitButton}
                  name='check' size={30} backgroundColor='#d3d3d3' color='green' />
              </TouchableHighlight>
              <TouchableHighlight onPress={this.props.hideModal}>
                <Icon style={s.cancelButton}
                  name='times' size={30} backgroundColor='#d3d3d3' color='green' />
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
    );
  }
}


module.exports = AddAlarmModal;
