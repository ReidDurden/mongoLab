module.exports =
{
  updateData: async function(db, oldData, newData){
    const collection = db.collection('products');

    await collection.updateOne(oldData, {$set: newData}, function(err, res) {
      if (err) throw err;
      console.log("It has been updated!");
    });

    return;
  }
}
