module.exports = function(app, db){
   app.post("/remove", function(req, res) {
      var dbName = req.body.name;
      db.collection(dbName).drop(function(err, res) {
      if (err) throw err;
      if (res) console.log("Collection deleted");
      db.close();
    });
  });

}
