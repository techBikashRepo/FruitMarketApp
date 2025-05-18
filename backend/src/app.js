// const express = require('express');
// const mongoose = require('mongoose');
// const productRoutes = require('./routes/productRoutes');
// const dbConfig = require('./config/db');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Connect to the database
// dbConfig();

// // Routes
// app.use('/api/products', productRoutes);

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require("express");
const mysql = require("mysql2");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "nodemysql",
  port: 3306,
  multipleStatements: true,
});

app.get("/getData", (req, res) => {
  pool.execute("SELECT * FROM productss", (error, data) => {
    if (error) {
      res.status(500).send(error.sqlMessage);
    } else {
      res.status(200).send(data);
    }
  });
});

// Routes
app.use("/api/products", productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
