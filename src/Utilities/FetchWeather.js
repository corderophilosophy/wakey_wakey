'use strict';

var FetchWeather = {
  getWeather(url) {
    console.log(`getWeather is now running`);
    return fetch(url)
    .then((response) => {
      response.json();
    })
    .catch((error) => {
      console.warn(error);
    });
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
