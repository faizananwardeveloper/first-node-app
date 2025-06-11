const name = "Muhammad Faizan Anwar";
console.log('name:', name);
console.log(`My name is "${name}"`);

console.log('Directory Name:', __dirname);

global.myName = name;
console.log('globalName:', global.myName);

console.log('File Name:', __filename);

console.log('Platform:', process.platform);

globalThis.fullName = name;
console.log('globalThis.fullName:', globalThis.fullName);

console.log('Module:', module);

console.log('start');
let count = 0;
const intervalId = setInterval(() => {
    console.log("Count:", count + 1);
    count++;

    if (count === 5) {
        clearInterval(intervalId);
        console.log("Interval cleared at count 5.");
    }
}, 1000);
console.log('end');

const globalUserName = require('./constants')
console.log("global var - name is ", globalUserName.name);
