# Fruit Market App

## Overview
The Fruit Market App is a full-stack application built using the MERN (MongoDB, Express, React, Node.js) stack. This application allows users to browse and add various fruits to their cart. The frontend is styled using Tailwind CSS for a modern and responsive design.

## Project Structure
The project is organized into two main directories: `backend` and `frontend`.

### Backend
- **src/**: Contains the source code for the backend.
  - **controllers/**: Contains the logic for handling product-related requests.
    - `productController.js`: Functions for getting and adding products.
  - **models/**: Contains the Mongoose schema definitions.
    - `product.js`: Schema for product data.
  - **routes/**: Defines the API endpoints.
    - `productRoutes.js`: Routes for product-related operations.
  - `app.js`: Entry point for the backend application, sets up the server and middleware.
  - **config/**: Configuration files.
    - `db.js`: Database connection logic.
- `package.json`: Lists dependencies and scripts for the backend.

### Frontend
- **public/**: Contains static files.
  - `index.html`: Main HTML file for the React application.
- **src/**: Contains the source code for the frontend.
  - **assets/**: Contains images of fruits used in the product cards.
  - **components/**: Contains reusable components.
    - `ProductCard.jsx`: Component for displaying individual product cards.
  - **pages/**: Contains page components.
    - `LandingPage.jsx`: Main landing page component.
  - `App.jsx`: Main application component that sets up routing.
  - `index.js`: Entry point for the React application.
  - **styles/**: Contains stylesheets.
    - `index.css`: Global styles and Tailwind CSS imports.
- `tailwind.config.js`: Configuration file for Tailwind CSS.
- `postcss.config.js`: Configuration for PostCSS.
- `package.json`: Lists dependencies and scripts for the frontend.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB installed and running (or use a cloud service like MongoDB Atlas).

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

The application should now be running on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License.