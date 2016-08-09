/* @flow */

import React, { Component } from 'react';
import {
  View,
  TouchableNativeFeedback,
  TimePickerAndroid,
  Text,
  StyleSheet,
  ListView,
  Image,
} from 'react-native';

import s from '../Styles/styles';
import Header from './AlarmComponents/Header';
import Footer from './AlarmComponents/Footer';
import AlarmItem from './AlarmComponents/AlarmItem';
import AddAlarmModal from './AlarmComponents/AddAlarmModal';

const URL = `https://wakeywakey-4f20f.firebaseio.com/Alarms/alarms.json`;

export default class Alarms extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
      alarms: [],
      modalVisibility: false,
    };
  }
  componentDidMount() {
    this._refreshData();
  }
  _renderRow(rowData) {
    return <AlarmItem time={rowData.time} value={false} label={rowData.label}/>;
  }
  _refreshData() {
    var tempState = {};
    fetch(URL)
    .then((res) => res.json())
    .then((resJSON) => {
      let count = 0;
      for (let key in resJSON) {
        tempState[count] = {};
        tempState[count].time = resJSON[key].time;
        tempState[count].label = resJSON[key].label;
        tempState[count].value = resJSON[key].value;
        count += 1;
      }
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(tempState)
      });
    })
    .catch((error) => console.error(error));
  }
  _showModal() {
    this.setState({
      modalVisibility: true,
    });
  }
  _hideModal() {
    this.setState({
      modalVisibility: false,
    });
  }
  render() {
    return (
      <View style={s.mainContainer}>
        <Header
          label="Alarms"
          navigator={this.props.navigator} />
          <ListView
            style={s.alarmsList}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow} />
          <AddAlarmModal
            modalVisible={this.state.modalVisibility}
            showModal={this._showModal}
            hideModal={this._hideModal} />
          <Footer showModal={this._showModal} />
      </View>
    );
  }
}
