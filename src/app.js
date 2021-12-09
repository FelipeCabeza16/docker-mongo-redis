const express = require('express');
require('./db/index');
const blogRouter = require('./routers/blog');


const app = express();
app.use(express.json());

app.use(blogRouter)

app.listen(3000, () => {
    console.log('listening on port 3000');
});