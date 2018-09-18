module.exports =
{
  addData: async function(db, productDetails){
    const collection = db.collection('products');

    var myobj = productDetails;
     await collection.insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    });


    return;
  }
}
