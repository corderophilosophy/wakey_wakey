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

import ls from 'react-native-local-storage';
import s from '../Styles/styles';
import Header from './AlarmComponents/Header';
import Footer from './AlarmComponents/Footer';
import AlarmItem from './AlarmComponents/AlarmItem';
import AddAlarmModal from './AlarmComponents/AddAlarmModal';

const URL = `https://wakeywakey-4f20f.firebaseio.com/Alarms/alarms.json`;
const STORAGE_KEY = '@ALARM:key';

export default class Alarms extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([]),
      alarms: [],
      currentTime: '',
      currentHour: '',
      currentMinute: '',
      currentLabel: '',
      modalVisibility: false,
    };
  }
  componentDidMount() {
    ls.get(STORAGE_KEY)
    .then((data) => {
      if (data !== null) {
        console.log('We have data' + JSON.stringify(data));
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data),
          alarms: data,
        });
      } else {
        console.log('No data. Awaiting data.');
      }
    }).catch((error) => console.log(error.message))
    .done();
  }

  _renderRow(rowData) {
    console.log('Running _renderRow');
    return <AlarmItem time={rowData.time} value={rowData.value} label={rowData.label} key={rowData.key}/>;
  }
  // async _setLocalStorage() {
  //   try {
  //     await ls.save('ALARMS', JSON.stringify(this.state.alarms));
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  //   console.log('Running _setLocalStorage');
  //   var alarm = await ls.save('ALARMS', JSON.stringify(this.state.alarms))
  //   ls.get('ALARMS').then((data) => {
  //     console.log(`get: ${data}`);
  //   }).catch((error) => {
  //     console.error(error);
  //   })
  // }
   _refreshData() {
    ls.get(STORAGE_KEY)
    .then((data) => {
      console.log('data is: ');
      console.log(data);
      if (data !== null) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data),
        });
      } else {
        throw new Error('error in datasource');
      }
    }).catch((error) => console.warn(error.message))
    .done();
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
    console.log('Submitting Alarm');
    var tempAlarm = {
      time: this.state.currentTime,
      label: this.state.currentLabel,
      value: true,
      key: new Date().getTime(),
    };
    this.setState({
      alarms: [...this.state.alarms, [tempAlarm]]
    });
    console.log(this.state.alarms);
    ls.save(STORAGE_KEY, this.state.alarms)
    .then((data) => console.log(`Saved ${data} to disk.`))
    .catch((error) => console.warn(error.message))
    .done();
    this._refreshData()
    this._hideModal();
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
