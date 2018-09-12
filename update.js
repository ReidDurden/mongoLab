module.exports = function(app, db){
  app.post("/update", function(req, res) {
    var dbName = req.body.name;
    var oldQ = req.body.oldVal;
    var newVals = req.body.newVal;
    db.collection(dbName).updateOne(oldQ, oldVals, function(err, res) {
      if (err) throw err;
      console.log("It has been updated!");
      db.close();
    });
  });

}
