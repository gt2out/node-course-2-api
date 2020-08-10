//Lesson 80

const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove('5f315dd94d8fd741531e7990').then((todo) => {
//     console.log(todo);
// });

Todo.findOneAndRemove({_id: "5f315dd94d8fd741531e7990"}).then((todo) => {
    
})