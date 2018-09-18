module.exports =
{
  readData: async function(db){
    const collection = db.collection('products');
    //await collection.updateOne({id:'1'});

    //var myobj = { name: "Company Inc", address: "Highway 37" };
    //collection.insertOne(myobj, function(err, res) {
    //  if (err) throw err;
    //  console.log("1 document inserted");
    //});

    let response = await collection.find().toArray();
    let res = JSON.stringify(response);
    return res;
  }
}
