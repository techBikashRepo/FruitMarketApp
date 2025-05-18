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
const productRoutes = require("./routes/productRoutes");
const router = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

// Connect to the database

// Routes
app.use("/api/products", productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
