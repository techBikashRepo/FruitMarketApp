# Fruit Market App - Backend

## Overview
The Fruit Market App is a full-stack application built using the MERN stack (MongoDB, Express, React, Node.js). This backend section provides the API for managing fruit products, including functionalities to retrieve and add products.

## Folder Structure
```
backend
├── src
│   ├── controllers        # Contains the logic for handling requests
│   ├── models             # Contains Mongoose models for the database
│   ├── routes             # Contains route definitions for the API
│   ├── config             # Contains configuration files (e.g., database connection)
│   └── app.js             # Entry point for the backend application
├── package.json           # Lists dependencies and scripts for the backend
└── README.md              # Documentation for the backend
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd fruitmarketapp/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
1. Ensure that MongoDB is running.
2. Start the server:
   ```
   npm start
   ```
3. The server will run on `http://localhost:5000`.

### API Endpoints
- `GET /api/products` - Retrieve all products
- `POST /api/products` - Add a new product

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.