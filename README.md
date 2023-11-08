## ECOMMERCE BACKEND API

## Description
This repository contains the backend API for our ecommerce application. The API is responsible for user management, product operations, and authentication.

## Features
User registration and authentication.
CRUD operations for products.
Secure password storage using bcrypt.
JSON Web Token (JWT) authentication.
API validation using JOI.
Cloudinary integration for storing product images.


## Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js installed.
PostgreSQL database set up.
Cloudinary account for image storage.
Prisma for database interaction.


## Installation
Clone the repository:

git clone https://github.com/MosesMusoke/BackendcommerceAssignment.git

Install dependencies:

cd BackendcommerceAssignment
npm install
Usage
To start the server, run:
npm start
The server will run on port 3000 by default. You can change the port in your .env file.

## Endpoints
POST /users/signup: Register a new user.
POST /users/login: Authenticate and get an access token.
POST /products: Create a new product (authentication required).
GET /products: Get all products.
GET /products/:productId: Get a product by ID.
PUT /products/:productId: Update a product by ID (authentication required).
DELETE /products/:productId: Delete a product by ID (authentication required).

## Data Models
User: Represents a registered user with a username, email, and password.
Product: Represents a product with details like name, description, price, quantity, category, store name, and image URL.
Category: Represents a product category with a name and description.


## Contributing
Contributions are welcome! Please fork the project and create a pull request with your changes.


