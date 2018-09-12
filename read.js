module.exports = function(app, db){
  app.post("/read", function(req, res) {

  var dbName = req.body.name;

  db.collection(dbName).find({}).toArray(function(err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
  });


}
