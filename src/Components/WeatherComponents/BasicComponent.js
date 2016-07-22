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

      <Text style={styles.basicText}>{this.props.children}</Text>

    );
  }
}

const styles = StyleSheet.create({
  basicText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = BasicComponent;
