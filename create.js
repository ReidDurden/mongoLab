module.exports = function(app, db){
  app.post("/create", function(req, res) {

  var dbName = req.body.name;
  db.createCollection(dbName, function(err, res) {
   if (err) throw err;
   console.log("Collection created!");
   db.close();
 });

});
}
