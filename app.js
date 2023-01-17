// ----- note -----

// GLOBALS - NO WINDOW !!!!

// __dirname    - path to current directory
// __filename   - filename
// require      - function to use modules (CommonJS)
// module       - info about current module (file)
// process      - info about env where the program is being executed

// ----- Terminal -----
// clear        - clear out the terminal
// npm          - node package manager - global command, comes with node  // npmjs.com
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (store important info about project/package)
// manual approach (creare package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// npm i lodash
// npm i bootstrap
// ----- Terminal -----

// ----- code testing -----

// console.log(__dirname);
// console.log(__filename);

// console.log(require);
// console.log(module);
// console.log(process);

// -----------------------------------------------------------

// it will loop Syahmi forever, 1000 = 1 sec per Syahmi.
// setInterval(() => {
//     console.log("Syahmi");
// }, 1000);

// once only came Syahmi, number means for miliseconds.
// setTimeout(() => {
//     console.log("Syahmi");
// }, 2000);

// -----------------------------------------------------------]

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
