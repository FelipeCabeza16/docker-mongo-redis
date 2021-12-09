
const redis = require('redis');
const Blog = require('../models/blog');

exports.getBlog = async (req, res) => {

    try {
        const blog = await Blog.find();
        res.send(blog)

    } catch (error) {
        console.log(error);
        res.send(400).send(error);
    }
};

exports.postBlog = async (req, res) => {

    try {
        // conexion con mongo
        const blog = new Blog(req.body);
        await blog.save();
        res.send({ blog })
        // conexion con redis        
        const client = redis.createClient();
        client.set('blog', JSON.stringify(blog));

    } catch (error) {
        console.log(error);
        res.send(400).send(error);
    }
};