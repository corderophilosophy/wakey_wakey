/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Basic from './BasicComponent';

import { createIconSetFromFontello } from 'react-native-vector-icons'; import fontelloConfig from '../../Data/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

// console.log(this.props);
class IconBar extends Component {
  render() {
    return (
      <View style={styles.iconContainer}>
        <Basic>
          <Icon
            name={this.props.name[0]}
            size={50}
            color="black"
            style={styles.firstChild} />
        </Basic>
        <Basic>
          <Icon name={this.props.name[1]} size={50} color="black" />
        </Basic>
        <Basic>
          <Icon name={this.props.name[2]} size={50} color="black" />
        </Basic>
        <Basic>
          <Icon name={this.props.name[3]} size={50} color="black" />
        </Basic>
        <Basic>
          <Icon
            name={this.props.name[4]}
            size={50}
            color="black"
            style={styles.lastChild} />
        </Basic>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  iconContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = IconBar;
