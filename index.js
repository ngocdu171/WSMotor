const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');

const bodyParser = require('body-parser');
const user = require('./routes/user');
const product = require('./routes/product');
const catalog = require('./routes/catalog');

app.use(bodyParser.json());

//Import Routes
app.use('/user', user);
app.use('/product', product);
app.use('/catalog', catalog);

//////////////
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/test',(req,res) => {
    res.send('Hello DuPham')
})

Promise.all(
  [
    db.query(`CREATE TABLE IF NOT EXISTS tbl_comment(
      idComment INT(11) AUTO_INCREMENT PRIMARY KEY,
      content varchar(255) not null,
      ten varchar(50) not null,
      email varchar(50) not null,
      date datetime not null,
      rating INT(11) not null,
      idProduct INT(11) not null default 0
    )`),
    db.query(`CREATE TABLE IF NOT EXISTS tbl_catalog(
      idCat INT(11) AUTO_INCREMENT PRIMARY KEY,
      nameCat varchar(50) not null
    )`),
    db.query(`CREATE TABLE IF NOT EXISTS tbl_product(
      idProduct INT(11) AUTO_INCREMENT PRIMARY KEY,
      nameProduct varchar(50) default null,
      amountProduct INT(11) default null,
      S tinyINT(1) default 1,
      M tinyINT(1) default 1,
      L tinyINT(1) default 1,
      imgProduct varchar(250) default null,
      priceProduct double default null,
      dateUpdate timestamp not null default current_timestamp() on update current_timestamp(),
      desProduct varchar(4000) default null,
      idCat INT(11) default null,
      showHide tinyINT(1) default 0,
      views INT(11) default 0
    )`),
    db.query(`CREATE TABLE IF NOT EXISTS tbl_user(
      idUser INT(11) not null auto_increment,
      firstname varchar(50) not null,
      lastname varchar(50) not null,
      email varchar(50) not null,
      username varchar(50) not null,
      password varchar(250) not null,
      phone double default null,
      address varchar(500) default null
    )`),
  // Add more table create statements if you need more tables
  ]
).then(() => {
  console.log('database initialized');
  app.listen(port, () => {
      console.log(`Example API listening on http://localhost:${port}\n`);
  });
})
.catch(error => console.log(error));