/* @flow */

import React, { Component } from 'react';
import {
  View,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Alarm extends Component {
  _onPressButton() {
    console.log('Hi!');
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          onPress={this._onPressButton.bind(this)}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.navBackButton} onPress={this._onPressButton()}>
            <Text><Icon name="chevron-left" size={50} color="#000"/></Text>
          </View>
        </TouchableNativeFeedback>
        <Text>I'm the Alarm component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
