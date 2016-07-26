/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Daily extends Component {
  render() {
    return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Text label='00:00:00'>
        </Text>
        <Text label='00:03:00'>
        </Text>
        <Text label='00:06:00'>
        </Text>
        <Text label='00:09:00'>
        </Text>
      </View>
      <View style={styles.row2}>
        <Text label='00:12:00'>
        </Text>
        <Text label='00:15:00'>
        </Text>
        <Text label='00:18:00'>
        </Text>
        <Text label='00:00:00'>
        </Text>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  row1: {
    flex: 1,
    flexDirection: 'row',
  },
  row2: {
    flex: 1,
    flexDirection: 'row',
  },
});

module.exports = Daily;
