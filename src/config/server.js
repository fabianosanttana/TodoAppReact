const port = 3003;
const bodyParser = require("body-parser");
const express = require("express");
const server = express();
const Sequelize = require('sequelize');
const sequelize = require('./database');
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json())
server.use(allowCors)

// server.get('/',(req,res) => {
//     //Utilizando query e transpile do resultado para json
//     // sequelize.query("SELECT nome,descricao FROM textos").then(myTableRows => {
//     //     res.send(myTableRows)
//     //   })
// })

server.listen(port, () => {
    console.log(`porta em execucao${port}`);
})
module.exports = server