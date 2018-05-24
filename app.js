var fs = require('fs');

//buat File di dalam Folder Baru
fs.mkdir('datax', function(){
  fs.writeFile('./datax/data.txt','ini datanya !');
});
