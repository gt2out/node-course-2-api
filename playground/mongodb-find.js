// Lesson 66

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');


// db.collection('Todos').find({
//     _id: new ObjectID('5f1999e1c7a697aa8947e518')
// }).toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
// }), (err) => {
//     console.log('Unable to fetch Todos', err);
// };

// db.collection('Todos').find().count().then((count) => {
//     console.log(`Todos count: ${count}`);
// }), (err) => {
//     console.log('Unable to fetch Todos', err);
// };

db.collection('Users').find({name: 'Greg'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
    console.log('Unable to fetch Todos', err);
})

    // db.close();
});

// C:\Program Files\MongoDB\Server\4.2\bin>mongod.exe --dbpath /Users/Gizmo/mongo-data
