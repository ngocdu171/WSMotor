const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userRoute = require('./routes/user');

///connect to mongoDB
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


app.use(bodyParser.json());

app.use('/user', userRoute);
//routes///
app.get('/', (req, res) => {
    res.send('jhdasghdajsdgjhasgdjhasg');
});

app.get('/test',(req, res) =>{
    res.send('post');
});

app.listen(3000);