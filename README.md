Employee Management System - GraphQL API

📌 Project Overview

This is a GraphQL-based Employee Management System built using Node.js, Express, Apollo Server, and MongoDB. The API allows users to sign up, log in, and manage employees (CRUD operations) with authentication using JWT tokens.

🚀 Features

✅ User Authentication (Signup/Login with JWT)

✅ CRUD Operations for Employees

✅ MongoDB as Database (Atlas integration)

✅ GraphQL API with Apollo Server

✅ Hosted on Render

✅ Postman Collection for Testing

📂 Project Structure

/EmployeeManagementSystem
│── /config
│   ├── db.js (MongoDB connection setup)
│── /models
│   ├── User.js (User Schema)
│   ├── Employee.js (Employee Schema)
│── /resolvers
│   ├── resolvers.js (GraphQL API logic)
│── /schema
│   ├── typeDefs.js (GraphQL Schema)
│── /middlewares
│   ├── auth.js (JWT Authentication Middleware)
│── server.js (Main server entry point)
│── .env (Environment Variables - NOT INCLUDED)
│── package.json (Dependencies)
│── README.md (This File)

🛠️ Technologies Used

Node.js & Express.js - Backend Framework

GraphQL & Apollo Server - API & Query Language

MongoDB & Mongoose - Database & ODM

JWT (JSON Web Token) - Authentication

Postman - API Testing

Render - Cloud Deployment

📝 GraphQL API Endpoints

1️⃣ User Authentication

Signup User

mutation {
  signup(username: "testuser", email: "testuser@email.com", password: "test123") {
    token
    user { id username email }
  }
}

Login User

query {
  login(username: "testuser", email: "testuser@email.com", password: "test123") {
    token
    user { id username email }
  }
}

2️⃣ Employee Management

Add Employee

mutation {
  addEmployee(first_name: "Alice", last_name: "Smith", email: "alice@email.com", gender: "Female", designation: "Manager", salary: 7000, date_of_joining: "2023-06-15", department: "HR", employee_photo: "alice.jpg") {
    id first_name last_name email
  }
}

Get All Employees

query {
  getAllEmployees { id first_name last_name email designation salary }
}

Get Employee by ID

query {
  getEmployeeById(eid: "employee_id_here") { id first_name last_name email designation }
}

Update Employee

mutation {
  updateEmployee(eid: "employee_id_here", first_name: "Alice", last_name: "Johnson", email: "alice.johnson@email.com", salary: 7500) {
    id first_name last_name email salary
  }
}

Delete Employee

mutation {
  deleteEmployee(eid: "employee_id_here")
}

🔌 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/your-username/COMP3133-EmployeeManagement.git
cd COMP3133-EmployeeManagement

2️⃣ Install Dependencies

npm install

3️⃣ Setup Environment Variables

Create a .env file in the root directory and add:

MONGO_URI=mongodb+srv://your_mongo_connection
JWT_SECRET=your_jwt_secret

4️⃣ Start the Server

node server.js

5️⃣ Test API in Postman

Import the provided Postman collection (COMP3133.postman_collection.json).

Run the GraphQL queries and mutations.

🚀 Deployment

The API is deployed on Render and can be accessed at:

🔗 https://comp3133-winter2025-2.onrender.com/graphql

