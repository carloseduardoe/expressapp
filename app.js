import express from 'express';
import db from './db/db';
import bodyParser from 'body-parser';

const app = express(),
port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// BROWSE
app.get('/api/todos', (req, res) => {
    res.status(200).send({
        message: "OK",
        ToDos: db
    });
});

// READ
app.get('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const filtered = db.filter(item => item.id === id);
    
    res.status(404);
    let result = {
        message: 'To Do not found',
    };

    if(filtered.length) {
        res.status(200);
        result = {
            message: 'OK',
            ToDo: filtered[0]
        };
    }
    
    return res.send(result);
});

// EDIT
app.put('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const filtered = db.filter(item => item.id === id);

    res.status(404);
    let result = {
        message: 'To Do not found',
    }

    if(filtered[0]) {
        let index = db.indexOf(filtered[0]);
        let updatedItem = {
            title: req.body.title ? 
                req.body.title : db[index].title,
            description: req.body.description ? 
                req.body.description : db[index].description
        };

        db.splice(index, 1, updatedItem);

        res.status(200);
        result = {
            message: 'OK',
            ToDo: db[index]
        };
    }
    
    return res.send(result);
});

// ADD
app.post('/api/todos', (req, res) => {
    const { title, description } = req.body;
    res.status(400);
    let result = {
        message: 'Insufficient data'
    }
    
    if(title && description) {
        let todo = {
            id: db.length + 1,
            title: title,
            description: description
        };
    
        db.push(todo);

        res.status(201);
        result = {
            message: 'OK',
            ToDo: todo
        }
    }
    
    return res.send(result);
});

// DELETE
app.delete('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const filtered = db.filter(item => item.id === id);

    res.status(404);
    let response = {
        message: 'To Do not found',
    };
    
    if (filtered.length) {
        db.splice(db.indexOf(filtered[0]), 1);
        res.status(200)
        response = {
            message: 'Successful deletion',
            ToDo: filtered[0]
        };
    }
    
    return res.send(response);
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
