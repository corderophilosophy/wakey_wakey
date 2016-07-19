var happy = require('./ohhappyday');
var uniqueRandom = require('unique-random-array');

module.exports = {
  all: happy,
  random: uniqueRandom(happy),
};
