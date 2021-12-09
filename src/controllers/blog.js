
const Blog = require('../models/blog');

exports.getBlog = async (req, res) => {

    try {
        const blog = await Blog.findAll();
        res.send(blog)

    } catch (error) {
        console.log(error);
        res.send(400).send(error);
    }
};