const redis = require('redis');
const Blog = require('../models/blog');


exports.getBlogsByMongo = async (req, res) => {

    try {
        const blog = await Blog.find();
        res.send(blog)
    } catch (error) {
        console.log(error);
        res.send(400).send(error);
    }
};


exports.getBlogsByRedis = async (req, res) => {

    try {
        const client = redis.createClient({
            host: "redis-server",
            port: 6379
        });
        client.connect();
        const blogs = await client.hGetAll('blogs');
        client.quit();
        res.send(blogs)
    } catch (error) {
        console.log(error);
        res.send(400).send(error);
    }
};


exports.getBlogByIDMongo = async (req, res) => {

    try {
        const id = req.params.id;
        const blog = await Blog.findById(id);
        res.send(blog);
    } catch (error) {
        console.log(error);
        res.send(400).send(error);
    }
};

exports.getBlogByIDRedis = async (req, res) => {
    try {

        const client = redis.createClient();
        client.connect();
        const id = req.params.id;
        const blog = await client.hGet('blogs', id);
        client.quit();
        res.send(blog);
    } catch(e){
        console.log(error);
        res.send(400).send(error);
    }
}
exports.postBlog = async (req, res) => {

    try {
        // conexion con mongo
        const blog = new Blog(req.body);
        await blog.save();
        // conexion con redis        
        const client = redis.createClient({
            host: "redis-server",
            port: 6379
        });;
        client.connect();
        await client.hSet('blogs', blog._id.toString(), JSON.stringify(blog));
        client.quit();
        res.send({ blog })
        
    } catch (error) {
        console.log(error);
        res.send(400).send(error);
    }
};