const os = require('os');

console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());
console.log('Login: ', os.userInfo().username);