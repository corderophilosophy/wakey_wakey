/* @flow */

import React, { Component } from 'react';
import {
  View,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
} from 'react-native';

import BackButton from './AlarmComponents/BackButton';

export default class Alarms extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BackButton navigator={this.props.navigator} />
        <Text>I'm the Alarms component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
