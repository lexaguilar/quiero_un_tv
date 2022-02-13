const express = require("express");
const app = express();
const cors = require("cors");
const { processData } = require("./shops");
const { readData } = require("./config");

const port = process.env.PORT || 3000; 

app.use(cors());

app.listen(port, () => {

 console.log("El servidor está inicializado en el puerto 3000");
 processData();

});

app.get('/', function (req, res) {

    res.send('Saludos desde express 4');

});

app.get('/data', function (req, res) {

    const data = readData();

    res.send(data);

});