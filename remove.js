module.export = function(app, db, dbName){
   app.post("/remove", function(req, res) {
      db.collection(dbName).drop(function(err, res) {
      if (err) throw err;
      if (res) console.log("Collection deleted");
      db.close();
    });
  });

}
