import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'; // See README
import routes from './src/routes/offerRoutes';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise; // we make a connection and we don't wait for it.

// define a db that doesn't exist and it will be created automatically with the first POST operation.
mongoose.connect('mongodb://localhost/restronaut-db');

// bodyparser setup: setting up json to work
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) => 
    /** `text` instead of 'text', because `` is es6 syntax. This way we can inject a variable like PORT */
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);

