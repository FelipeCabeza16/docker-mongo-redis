const express = require('express');
const redis = require('redis');
require('./db/index');
const blogRouter = require('./routers/blog');


const app = express();
app.use(express.json());

app.use(blogRouter)

const client = redis.createClient();

client.on('connect', () => {
    console.log('conectado')
});


app.listen(3000, () => {
    console.log('listening on port 3000');
});