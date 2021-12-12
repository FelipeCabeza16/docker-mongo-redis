const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo-server/blog-api-dev', {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
}).then(db => console.log('DB connected ', db.connection.host)).catch((e) => console.log("error: "+e));