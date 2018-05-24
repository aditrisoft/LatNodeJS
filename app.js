var fs = require('fs');

//delete file
fs.unlink('tulis.txt');

//buat directory
fs.mkdirSync('hapus');

//hapsu directory
fs.rmdirSync('hapus');
