/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class BasicComponent extends Component {
  render() {
    return (

      <View style={styles.basicText}>{this.props.children}</View>

    );
  }
}

const styles = StyleSheet.create({
  basicText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 10,
  },
});

module.exports = BasicComponent;
