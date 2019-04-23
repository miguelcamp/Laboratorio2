//Laboratorio 2 Miguel Campero
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');


//Rutas
var product = require('./routes/product');

// Conexion a base de datos remota con mongoose
var mongoose = require('mongoose');
let dev_db_url = "mongodb+srv://admin:admin@labo2miguelcampero-rtzqg.mongodb.net/test?retryWrites=true";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(7000);

