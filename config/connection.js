const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

mongoose.connection.once("open", () => console.log('connected 123456789'))
    .on("error", error => {
        console.log('error is:', error);
    });