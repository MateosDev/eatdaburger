//CONNECTION TO MYSQL
var mysql = require("mysql");
var connection;
require("dotenv").config();


//the one component I almost forgot
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.mysql//tacq6q6dw9if0qny:vleoug2e6re90q2b@cig4l2op6r0fxymw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ltmij40iiqv93j88

    );
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "TexasLove817817817..",
    database: "burgers_db"
  });
}


connection.connect();

module.exports = connection;