'use strict';
import {
  AsyncStorage,
} from 'react-native';

var FetchWeather = {
  getWeather(url) {
    console.log(`getWeather is now running`);
    fetch(url)
    .then((response) => {
      response.json();
    })
    .then((responseJSON) => {
      return responseJSON;
    })
    .catch((error) => {
      console.warn(error);
    });
  },
  getLocation() {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => {
        var location = {
          initialLatitude: initialPosition.coords.latitude,
          initialLongitude: initialPosition.coords.longitude,
        };
        return location;
      },
      (error) => {alert(error.message);},
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  },
  asyncStorageSetItem(key, location) {
    AsyncStorage.setItem(key, location)
    .then(() => console.log(`This was saved to disk: ${location}`))
    .catch((error) => console.log(`AsyncStorage error: ${error.message}`))
    .done();
  },
  asyncStorageGetItem(key, callback) {
    AsyncStorage.getItem(key)
    .then((value) => {
      if (value !== null) {
        callback(value);
      }
    })
    .catch((error) => console.log(`AsyncStorage.getItem error: ${error.message}`))
    .done();
  },
  printDate() {
    var today = new Date();
    var m = today.getMonth();
    var d = today.getDate();
    return `${m}/${d}`;
  },
  formatDate(date) {
    var m = date.slice(5,7);
    var d = date.slice(8,10);
    return [m,d];
  },

};

module.exports = FetchWeather;
