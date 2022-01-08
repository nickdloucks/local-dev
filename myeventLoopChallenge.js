const fs = require('fs');

process.on('beforeExit', () => {
    console.log("Print Fifth");
});

fs.readFile(__filename, () => {
    setImmediate(() => {
        console.log("Print Third");
    });
});

process.nextTick(() => {
    console.log('Print Second');
});

console.log('Print First');

setTimeout(() =>{
    console.log("Print Forth");
}, 7000);