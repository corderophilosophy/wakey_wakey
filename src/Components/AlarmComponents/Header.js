import React, { Component } from 'react';

import {
  Text,
  View
} from 'react-native';

import s from '../../Styles/styles';
import BackButton from './BackButton';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={s.headerContainer}>
        <BackButton navigator={this.props.navigator} />
        <Text style={s.headerText}>
          {this.props.label}
        </Text>
      </View>
    );
  }
}

module.exports = Header;
