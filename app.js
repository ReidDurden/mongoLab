const express = require('express')
const app = express();
const path = require('path');
const http = require('http').Server(app);
const bodyParser = require('body-parser');

app.use (bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


const MongoClient = require('mongodb').MongoClient;
const url = 'mongo://localhost:27017';
MongoClient.connect(url, {poolSize:10}, function(err,client) {
  if (err) {return console.log(err)}
  const dbName = 'mydb';
  const db = client.db(dbName);
  require('./add.js')(app, db);
  require('./create.js')(app, db);
  require('./read.js')(app, db);
  require('./remove.js')(app, db);
  require('./update.js')(app,db);
});
