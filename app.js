const express = require('express')
const app = express();
const path = require('path');
const http = require('http').Server(app);
const bodyParser = require('body-parser');

app.use(express.static(path.join('./week9/dist/week9')));
app.use (bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

http.listen(3000,() => {
  console.log("Server Started...");
});

var readQ = require('./read.js');
var addQ = require('./add.js');
var removeQ = require('./remove.js');
var updateQ = require('./update.js');

app.get('/*', function(req,res) {
  res.sendFile(__dirname + '/week9/dist/week9/index.html')
});

app.post('/read', function(req,res) {
  readQ.readData(db).then(result=>{
    console.log(result);
  })
});

app.post('/add', function(req, res) {
  var newData = {productName:"NotUpdated", productID:"66"};
  addQ.addData(db, newData).then(result=>{
    console.log("A Piece of data was added");
  })
});

app.post('/remove', function(req, res) {
  var query = {productID:"45"};
  removeQ.deleteData(db, query).then(result=>{
    console.log("The there was something deleted from the thingo");
  })
});

app.post('/update', function(req, res) {
  var oldD = {productID:"66"};
  var newD = {productName:"Updated", productID:"66"};
  updateQ.updateData(db, oldD, newD).then(result=>{
    console.log("Data was updated");
  })
});


MongoClient.connect(url, {poolSize:10}, function(err,client) {
  if (err) {return console.log(err)}
  const dbName = 'testdb';
  const db = client.db(dbName);


});
