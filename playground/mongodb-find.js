  // var MongoClient = require('mongodb').MongoClient;

  var {MongoClient, ObjectID} = require('mongodb');

  MongoClient.connect('mongodb://localhost:27017/TodoApp', function (err,db) {

  if(err){
    return console.log("Unable to connect to MongoDB server");
  }

  console.log("Connected to MongoDB server");

  db.collection('Users').find({

    name:'Sam'

  }).toArray().then(
  (docs)=> {
    console.log("Todos");
    console.log(JSON.stringify(docs,undefined,2));

  }, (err)=> {
    console.log("Error");
  }
  );



// db.close();
  });
