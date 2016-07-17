/* @flow */

import React, { Component } from 'react';
import {

  Switch,
  StyleSheet,
} from 'react-native';

export default class HomeSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {value: false};
  }
  _onValueChange(value) {
    this.setState({ value : value });
  }
  render() {
    return (
      <Switch
        onValueChange={this._onValueChange.bind(this)}
        value={this.state.value}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
