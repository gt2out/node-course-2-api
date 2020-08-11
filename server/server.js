// Lesson 83

var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
       res.status(400).send(e);
    });
});

// GET /todos/1234132
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    //validate using is valid
    if (!ObjectID.isValid(id)) {
         // 404 response - empty send
        return res.status(404).send();
    };

    //find by id - if todo send it back
    Todo.findById(id).then((todo) => {
        if (todo) {    
        res.send({todo});
        } else {
            res.status(404).send();
        }   
    }, (e) => {
        res.status(404).send(e);
    });
    //if no todo - send 404 with empty body
    //success
    //error - send 400 - send empty body
});

app.delete('/todos/:id', (req, res) => {
    // get the id
    var id = req.params.id;

    // validate id, if not valid 404
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    };

    // remove todo by id
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.status(200).send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
        //success
            //if no doc send 404
            //if doc send doc with 200
        // error
            //400 with empty body
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});


module.exports = {app};