//CONNECTION TO MYSQL
var mysql = require("mysql");
var connection;
require("dotenv").config();


//the one component I almost forgot
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });
}


connection.connect();

module.exports = connection;