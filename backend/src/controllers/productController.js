// backend/src/controllers/productController.js

const Product = require('../models/product');

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
};

// Add a new product
exports.addProduct = async (req, res) => {
    const { name, price, imageUrl } = req.body;

    const newProduct = new Product({
        name,
        price,
        imageUrl,
    });

    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error });
    }
};