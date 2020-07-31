// Lesson 66

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Greg',
    //     age: 25,
    //     location: '218 Josephine'
    // }, (err, result) => {
    //     if (err) {
    //         console.log('Unable to create user');
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });


    db.close();
});

// cd C:\Program Files\MongoDB\Server\4.2\bin
// mongod.exe --dbpath /Users/Gizmo/mongo-data
