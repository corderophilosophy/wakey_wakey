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
        <Text style={styles.motd_quote}>{this.state.motd.quote}</Text>
        <Text style={styles.motd_source}>{this.state.motd.source}</Text>
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
    justifyContent: 'center',
    flexDirection: 'column',
  },
  motd_quote: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    marginHorizontal: 30,
    paddingBottom: 10,
    fontSize: 16,
    color: '#000',
  },
  motd_source: {
    color: '#000',
    fontStyle: 'italic',
  },
});
module.exports = Motd;
