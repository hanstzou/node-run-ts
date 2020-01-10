require('ts-node').register({ /* options */ });

const greeter = require('./src/hello')
const greet = greeter.default;

greet();
