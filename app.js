import express from 'express';
import db from './db/db';

const app = express(),
      port = 5000;

app.get('/api/todos', (req, res) => {
    console.log("request", req);
    res.status(200).send({
        message: "OK",
        todos: db
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});