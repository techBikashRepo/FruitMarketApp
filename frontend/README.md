# Fruit Market App

## Overview
The Fruit Market App is a full-stack MERN application that allows users to browse and purchase various fruits. The application is built using MongoDB, Express.js, React, and Node.js, with Tailwind CSS for styling.

## Project Structure
The project is organized into two main directories: `backend` and `frontend`.

### Backend
- **src/app.js**: Entry point of the backend application. Sets up the Express server and connects to the MongoDB database.
- **src/controllers/productController.js**: Contains functions for handling product-related requests.
- **src/models/product.js**: Defines the Mongoose schema for products.
- **src/routes/productRoutes.js**: Sets up routes for product-related endpoints.
- **src/config/db.js**: Contains the logic for connecting to the MongoDB database.
- **package.json**: Lists backend dependencies and scripts.
- **README.md**: Documentation for the backend.

### Frontend
- **public/index.html**: Main HTML file for the frontend application.
- **src/assets**: Contains images of fruits used in product cards.
- **src/components/ProductCard.jsx**: Displays individual product cards.
- **src/pages/LandingPage.jsx**: Serves as the landing page, rendering multiple ProductCard components.
- **src/App.jsx**: Main component that sets up routing and includes the LandingPage component.
- **src/index.js**: Entry point of the React application.
- **src/styles/index.css**: Contains global styles and imports Tailwind CSS.
- **tailwind.config.js**: Configuration file for Tailwind CSS.
- **postcss.config.js**: Configures PostCSS to use Tailwind CSS.
- **package.json**: Lists frontend dependencies and scripts.
- **README.md**: Documentation for the frontend.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB installed and running, or a MongoDB Atlas account for cloud hosting.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd fruitmarketapp
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd ../frontend
   npm start
   ```

### Usage
- Navigate to `http://localhost:3000` to view the application.
- Browse the available fruits and add them to your cart.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License.