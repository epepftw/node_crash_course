const fs = require('fs');
const path = require('path');

//Create Folder
//fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//    if(err) throw err;
  //  console.log('Folder created...');
//});

//Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err => {
//     if(err) throw err;
//     console.log('..File written...');

//     //File append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I hate Node.js', err => {
//         if(err) throw err;
//         console.log('..File written...');
//     });
// });


//Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//    if(err) throw err;
//    console.log(data);
// });

//Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hellopwet.txt'), (err) => {
    if(err) throw err;
    console.log('File renamed');
 });