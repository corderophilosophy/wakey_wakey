/* @flow */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
} from 'react-native';

import Main from './Components/Main';

export default class App extends Component {
  render() {
    return (
      <Main />
      // <Navigator
      //   style={styles.container}
      //   initialRoute={{
      //     id: 'Main',
      //     name: 'Index'
      //   }}
      //   renderScene={this.renderScene.bind(this)}
      //   configureScene={(route) => {
      //     if (route.sceneConfig) {
      //       return route.sceneConfig;
      //     }
      //     return Navigator.SceneConfigs.FloatFromRight;
      //   }} />
    )
  }
  // renderScene(route, navigator) {
  //   var routeId = route.id;
  //   if (routeId === 'Main') {
  //     return (
  //       <Main
  //         navigator={navigator} />
  //     );
  //   }
  //   if (routeId === '') {
  //     return (
  //       <...
  //         navigator={navigator} />
  //     )
  //   }
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
