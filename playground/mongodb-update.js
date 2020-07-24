// Lesson 66

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5f1afc4ec7a697aa8947f7f5")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'Kristin'
    }, {
        $set: {
            name: 'Greg'
        },
        $inc: {
            age: +1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    })

    // db.close();
});

// C:\Program Files\MongoDB\Server\4.2\bin>mongod.exe --dbpath /Users/Gizmo/mongo-data
