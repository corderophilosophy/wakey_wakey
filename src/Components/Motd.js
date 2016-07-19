/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Motd extends Component {
  render() {
    return (
      <View style={styles.motd_container}>
        <Text>I'm the Motd component</Text>
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    motd_container: {
      flex: 1,
      backgroundColor: 'honeydew',
      borderTopColor: '#333',
      borderTopWidth: 5,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
module.exports = Motd;
