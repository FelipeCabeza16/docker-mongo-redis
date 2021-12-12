
const express = require('express');
const redis = require('redis');
require('./db/index');
const blogRouter = require('./routers/blog');


const app = express();
app.use(express.json());

app.use(blogRouter)


try {

    debugger;
    const client = redis.createClient({url: 'redis://redis-server:6379'});
    debugger;
    
    client.on('connect', () => {
        console.log('conectado')
    });
    debugger;

    client.on('error', (err) => console.log('Redis Client Error', err));
    debugger;

    app.listen(3000, () => {
        console.log('listening on port 3000');
    });
    
    client.connect();

} catch (e) {
    console.log('error');
}
