module.export = function(app, db, dbName){
  app.post("/read", function(req, res) {

  db.collection(dbName).find({}).toArray(function(err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
  });


}
