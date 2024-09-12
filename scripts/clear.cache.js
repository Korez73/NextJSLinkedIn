/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', '.next');
console.log(dir);
fs.rmSync(dir, { recursive: true, force: true });
console.log('.next folder deleted');