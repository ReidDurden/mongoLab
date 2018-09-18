module.exports =
{
  deleteData: async function(db, query){
    const collection = db.collection('products');

    await collection.remove(query, function(err, res) {
      if (err) throw err;
      console.log("Deleted");
    });

    return;
  }
}
