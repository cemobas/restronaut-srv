import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => 
    /** `text` instead of 'text', because `` is es6 syntax. This way we can inject a variable like PORT */
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);

