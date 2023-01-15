const mysql = require("mysql2");
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "auth",
    password: "123456789",
  });
  const db = pool.promise();
  module.exports = db;