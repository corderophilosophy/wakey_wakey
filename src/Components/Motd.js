/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import Happy from '../Data/_motd.js';

class Motd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      motd: {
        quote: '',
        source: '',
      }
    };
  }
  _onPressButton() {
    var message = Happy.random();
    this.setState({
      motd: {
        quote: message.quote,
        source: message.source,
      }
    });
  }
  render() {
    return (
    <TouchableNativeFeedback
      onPress={this._onPressButton.bind(this)}
      background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={styles.motd_container}>
        <Text>{this.state.motd.quote}</Text>
        <Text>{this.state.motd.source}</Text>
      </View>
    </TouchableNativeFeedback>
    );
  }
  }

const styles = StyleSheet.create({
  motd_container: {
    flex: 1,
    backgroundColor: 'honeydew',
    alignItems: 'center',
    borderTopColor: '#333',
    borderTopWidth: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
module.exports = Motd;
