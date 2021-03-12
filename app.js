const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userRoute = require('./routes/user');

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