const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Hello World!!!');
});

app.post('/files', function(req, res) {
  const files = [];
  fs.readdirSync(req.body.location).forEach(file => {
    files.push(file);
  });

  res.send(files);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
