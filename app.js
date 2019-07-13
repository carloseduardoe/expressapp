import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes';

const app = express(),
      port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
