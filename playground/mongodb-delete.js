  // var MongoClient = require('mongodb').MongoClient;

  var {MongoClient, ObjectID} = require('mongodb');

  MongoClient.connect('mongodb://localhost:27017/TodoApp', function (err,db) {
  if(err){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  //deleteMany
db.collection('Todos').findOneAndDelete({text:'Walk the Dog'}).then((result)=>{
  console.log(result);
});

  //deleteOne

  //findOneAndDelete





// db.close();
  });
