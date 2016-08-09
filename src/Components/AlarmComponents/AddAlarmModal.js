/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import s from '../../Styles/styles';

class AddAlarmModal extends Component {
  render() {
    return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {alert('Modal has been closed.');}} >
        <View style={{marginTop: 22}}>
          <Text> Hello </Text>
          <TouchableHighlight onPress={() => {
            this.props.hideModal;
          }}>
            <Text> Hide Modal </Text>
          </TouchableHighlight>
          </View>
      </Modal>
    </View>
    );
  }
}


module.exports = AddAlarmModal;
