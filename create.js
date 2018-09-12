module.export = function(app, db, dbName){
  app.post("/create", function(req, res) {

  db.createCollection(dbName, function(err, res) {
   if (err) throw err;
   console.log("Collection created!");
   db.close();
 });
 
});
}
