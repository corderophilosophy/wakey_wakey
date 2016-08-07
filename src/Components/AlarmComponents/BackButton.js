/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
} from 'react-native';

import s from '../../Styles/styles';

import Icon from 'react-native-vector-icons/Entypo';

class BackButton extends Component {
  _onPressButton() {
    this.props.navigator.push({
      id: 'Main'
    });
  }
  render() {
    return (
      <TouchableNativeFeedback
        onPress={this._onPressButton.bind(this)}
        background={TouchableNativeFeedback.SelectableBackground()}>
          <View
            style={s.replyContainer}>
            <Text>
              <Icon name="reply" size={50} color="white"/>
            </Text>
          </View>
      </TouchableNativeFeedback>

    );
  }
}

module.exports = BackButton;
