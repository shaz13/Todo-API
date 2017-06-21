  // var MongoClient = require('mongodb').MongoClient;
  
  var {MongoClient, ObjectID} = require('mongodb');

  MongoClient.connect('mongodb://localhost:27017/TodoApp', function (err,db) {

  if(err){
    return console.log("Unable to connect");
  }

  console.log("Connected to MongoDB");

  // db.collection('Todos').insertOne({
  //   text: "Hello",
  //   completed: false
  // },(err,result)=> {
  //   if(err){
  //     return console.log("Unable to insert");
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: "Sam",
  //   age: "20",
  //   branch : 'CS'
  // }, (err,result)=> {
  //
  //   if(err){
  //   return console.log("Unable to insert the user data");
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());

db.close();
  });
