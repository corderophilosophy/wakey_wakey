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
      currentTime: '',
      currentHour: '',
      currentMinute: '',
      currentLabel: '',
      value: false,
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
  async _showTimePicker() {
    try {
      const {action, minute, hour} = await TimePickerAndroid.open();
      var newState = {};
      if (action === TimePickerAndroid.timeSetAction) {
        newState['Text'] = hour + ':' + (minute < 10 ? '0' + minute : minute);
        newState['Hour'] = hour;
        newState['Minute'] = minute < 10 ? '0' + minute : minute;
      } else if (action === TimePickerAndroid.dismissedAction) {
        newState['Text'] = 'dismissed';
      }
      this.setState({
        currentTime: newState['Text'],
        currentHour: newState['Hour'],
        currentMinute: newState['Minute'],
      });
    } catch({code, message}) {
      console.warn('Error: ' + message);
    }
  }
  _currentMessage(evt) {
    this.setState({
      currentLabel: evt.nativeEvent.text
    });
  }
  _submitAlarm() {
    let _alarm = {
      time: this.state.currentTime,
      label: this.state.currentLabel,
      value: true,
    }
    fetch(URL, {
      method: 'post',
      body: JSON.stringify(_alarm)
    })
    .then((res) => res.json())
    .catch((error) => console.log(error));
    this._refreshData()
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
            handleAlarmSubmit={this._submitAlarm.bind(this)}
            handleAlarmCancel={this._cancelAlarm}
            handleMessageSubmit={this._currentMessage.bind(this)}
            time={this.state.currentTime}
            showTimePicker={this._showTimePicker.bind(this)}
            modalVisible={this.state.modalVisibility}
            hideModal={this._hideModal.bind(this)} />
          <Footer showModal={this._showModal.bind(this)} />
      </View>
    );
  }
}
