var adi = require('fs');

var baca = adi.readFileSync('baca.txt','utf8');

console.log(baca);

adi.writeFileSync('tulis.txt',baca);
