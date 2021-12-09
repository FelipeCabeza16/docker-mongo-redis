
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
        const blog = new Blog(req.body);
        await blog.save();
        res.send({blog})
    } catch (error) {
        console.log(error);
        res.send(400).send(error);
    }
};