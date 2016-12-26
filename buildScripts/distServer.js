import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/*eslint-disable no-console*/

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

/*app.get('/users', function(request, response) {
  response.json([
    {"id":1,"firstName":"Christian", "lastName":"Crawford", "email":"christian@spinspire.com" },
    {"id":2,"firstName":"Jitesh", "lastName":"Doshi", "email":"jitesh@spinspire.com" },
    {"id":3,"firstName":"Revanth", "lastName":"Datla", "email":"revanth@spinspire.com" }
  ]);
});*/

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
