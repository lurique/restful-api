var readlineSync = require('readline-sync');

var userName = readlineSync.question('Can I have your name? ');
console.log('Hi ' + userName + '!');