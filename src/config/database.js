const mongoose = require('mongoose');
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://devtodo:devtodo@ds135619.mlab.com:35619/todo-app')

//Usando mySql para conexão, foda demais
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('database', 'user', 'password', {
//   host: 'mysql.comunicare.tv.br',
//   dialect: 'mysql',

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },

//   // SQLite only
// //   storage: 'path/to/database.sqlite', dialect |'sqlite'|'postgres'|'mssql'

//   // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
//   operatorsAliases: false
// });
// module.exports = sequelize
