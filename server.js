'use strict';

const express = require('express');
const cors = require('cors');
const multer = require('multer');
var upload = multer();
// require and use "multer"...

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});
// Api for file metadat information
app.post('/api/fileanalyse', upload.single('upfile'), function(req, res, next) {
  
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
