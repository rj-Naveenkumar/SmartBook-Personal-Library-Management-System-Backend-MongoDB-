# SmartBook – Personal Library Management System (Backend)

A RESTful API backend built with Node.js, Express.js, and MongoDB for managing users and personal library books.

---

## Features

- User registration and login with email and password.
- CRUD operations for books (Create, Read, Update, Delete).
- MongoDB used as the database with Mongoose ODM.
- Proper API request validation and error handling.
- CORS enabled for cross-origin requests.
- Tested API endpoints using Postman or any REST client.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- CORS
- dotenv (for environment variables)

---

## Project Structure
```
SMARTBOOK LIBRARY/
│
├── server.js                 # Main entry point; sets up Express app, MongoDB connection, and routes
├── .env                      # Contains environment variables (e.g., DB URI); DO NOT upload
├── .env.example              # Sample .env file without sensitive data
├── .gitignore                # Specifies files/folders Git should ignore (e.g., node_modules, .env)
├── package.json              # Defines project dependencies, scripts, and metadata
├── package-lock.json         # Locks dependency versions for consistent installs
│
├── models/
│   ├── Book.js               # Mongoose schema for book documents
│   └── User.js               # Mongoose schema for user registration/login
│
├── routes/
│   ├── bookRoutes.js         # API routes for adding, reading, updating, and deleting books
│   └── userRoutes.js         # API routes for registering and logging in users
│
├── postman/
│   └── SmartBook.postman_collection.json   # Postman collection for testing all backend APIs
│
└── README.md                 # Project overview, instructions, and API structure

```
## Install dependencies:
```
npm install
```
## Set up environment variables:
Create a .env file in the root folder with:
```
PORT=5000
MONGO_URI=_mongodb_connection_string
```
## Start the server:
The server should run at http://localhost:5000.
```
node server.js
```
# API Endpoints
## User Routes
- POST /api/users/register
  - Register a new user
  - 
** Request Body: **
  ```
  {
  "username": "yourname",
  "email": "youremail@example.com",
  "password": "yourpassword"
}
```
