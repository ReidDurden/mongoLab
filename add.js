module.export = function(app, db, dbName){
   app.post("/add", function(req, res) {
     db.collection(dbName).insertOne(req.body);
   });

}
