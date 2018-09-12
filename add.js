module.exports = function(app, db){
   app.post("/add", function(req, res) {
     var dbName = req.body.name
     db.collection(dbName).insertOne(req.body.insertion);
   });

}
