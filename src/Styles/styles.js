/* @flow */
'use strict';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  basicText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#002147',
    textAlignVertical: 'center',
  },
  iconShadow: {
    textShadowColor: '#002d61',
    textShadowRadius: 20,
    textShadowOffset: {width: 2, height: 2},
  },
});

export default styles;
