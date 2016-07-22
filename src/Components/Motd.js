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
    var message = Happy.random();
    super(props);
    this.state = {
      motd: {
        quote: message.quote,
        source: message.source,
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
        <View style={styles.motdContainer}>
          <Text style={styles.motdQuote}>{this.state.motd.quote}</Text>
          <Text style={styles.motdSource}>{this.state.motd.source}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  motdContainer: {
    flex: 2,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#369',
    borderTopWidth: 5,
    borderBottomColor: '#369',
    borderBottomWidth: 5,
  },
  motdQuote: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  motdSource: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
module.exports = Motd;
