const os = require('os');
const url = require('url');

const myURL = new URL('/test', 'https://telegraaf.nl');

console.log('print some message it needs !');

console.log(myURL.host);