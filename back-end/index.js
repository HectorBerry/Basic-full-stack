const express = require('express');
const app = express();

app.get('/',function(req, res){res.send('hola express');});

app.listen(3000);

console.log('-------------------------------------------');
console.log('-             My backend n*               -');
console.log('-------------------------------------------');

