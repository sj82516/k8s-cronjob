const myDBConfig = require("/etc/secret/secret.json");


console.log(`job 1 execute at ${new Date()}`);
console.log('my process env:', process.env);
console.log('my db config', myDBConfig)