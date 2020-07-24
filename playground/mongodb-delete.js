// Lesson 66

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
    //     console.log(res);
    // })

    // deleteOne

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
    //     console.log(res);
    // })

    // findOneAndDelete

    // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //     console.log(res);
    // })

    // db.collection('Users').deleteMany({name: 'Greg'}).then((res) => {
    //     console.log(res);
    // })

    db.collection('Users').findOneAndDelete({_id: ObjectID("5f185a239961d63afc5bbee0")}).then((res) => {
        console.log(res);
    })

    // db.close();
});

// C:\Program Files\MongoDB\Server\4.2\bin>mongod.exe --dbpath /Users/Gizmo/mongo-data
