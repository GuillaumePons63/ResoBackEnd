const express = require("express");
const app = express();
const mysql = require("promise-mysql2");

mysql
  .createConnection({
    user: 'root',
    password: '',
  })
  .then((connection) => {
    connection
      .query("CREATE DATABASE IF NOT EXISTS réso;")
      .then(() => {
        
        try {
          
        } catch {
          throw error;
        }
      })
      .catch((error) => console.log({ message: "erreur base de données" }));
  });
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization,*"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });

  
  module.exports = app;
