const express = require('express');
require('./db/index');

const app = express();
app.use(express.json());


app.listen(3000, () => {
    console.log('listening on port 3000');
});