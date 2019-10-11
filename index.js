const play = require('audio-play');
const load = require('audio-loader');
 
load('./sample.mp3').then(play);

