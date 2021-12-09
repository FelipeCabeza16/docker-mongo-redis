const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/blog-api-dev', {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
}).then(db => console.log('DB connected ', db.connection.host))