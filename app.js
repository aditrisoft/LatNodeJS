var adi = require('fs');

adi.readFile('baca.txt','utf8', function(err,data){
  console.log(data);
});
