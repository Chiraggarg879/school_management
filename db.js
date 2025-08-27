require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root", 
  password: process.env.MYSQL_PASSWORD || "Chirag@123cg",
  database: process.env.MYSQL_DATABASE || "school_management",
  port: process.env.MYSQL_PORT || 3306
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to MySQL database!");
});

module.exports = db;