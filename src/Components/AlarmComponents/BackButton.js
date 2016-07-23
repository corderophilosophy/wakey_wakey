/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class BackButton extends Component {
  _onPressButton() {
    this.props.navigator.push({
      id: 'Main'
    });
  }
  render() {
    return (
      <View>
        <TouchableNativeFeedback
          onPress={this._onPressButton.bind(this)}
          background={TouchableNativeFeedback.SelectableBackground()}>
            <View
              style={styles.navBackButton}>
              <Text>
                <Icon name="chevron-left" size={50} color="#000"/>
              </Text>
            </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

module.exports = BackButton;
