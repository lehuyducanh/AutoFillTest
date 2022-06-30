const fs = require('fs');

var companyName = fs.readFileSync('companyName.txt').toString().replace(/[^a-zA-Z0-9\n]/g, "").split('\n');

console.log(companyName);