const express = require('express')
const app = express();
const path = require('path');
const http = require('http').Server(app);
const bodyParser = require('body-parser');

app.use (bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {poolSize:10}, function(err,client) {
  if (err) {return console.log(err)}
  const dbName = 'testdb';
  const db = client.db(dbName);

  var readQ = require('./read.js');
  var addQ = require('./add.js');
  var removeQ = require('./remove.js');
  var updateQ = require('./update.js');

  //var newData = {productName:"NotUpdated", productID:"66"};
  //addQ.addData(db, newData).then(result=>{
  //  console.log("A Piece of data was added");
  //})

  //var query = {productID:"45"};
  //removeQ.deleteData(db, query).then(result=>{
  //  console.log("The there was something deleted from the thingo");
  //})

  //var oldD = {productID:"66"};
  //var newD = {productName:"Updated", productID:"66"};
  //updateQ.updateData(db, oldD, newD).then(result=>{
  //  console.log("Data was updated");
  //})


  readQ.readData(db).then(result=>{
    console.log(result);
  })

});
