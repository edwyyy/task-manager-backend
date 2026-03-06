Task Manager Backend API Documentation

1. Project Overview

The Task Manager Backend is a RESTful API built using Node.js, Express.js, and MongoDB. It allows users to register, log in, and manage their personal tasks securely using JWT authentication.

Features:

User registration and login
Secure password hashing with bcrypt
JWT-based authentication
CRUD operations for tasks
Each user can manage their own tasks

2. Technologies Used: 

node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt, Postman(testing)

3. Project Setup:

>clone project 
cd task-manager-backend

>install dependencies
npm installss

>start server
npm run dev

>server runs on port: 5000
http://localhost:5000

4. API End Points:

>Register User
endpoint: POST /api/auth/register
body(JSON): 
{
"name": "user_name",
"email": "user_mail",
"password": "user_password"
}

>Login User
endpoint: POST /api/auth/login
body: {
"email": "user_mail",
"password": "user_password"
}

>Task API
Authorization: JWT_TOKEN

>Create Task
endpoint: POST /api/tasks
body: {
"title": " ",
"description": " "
"status": "pending/completed"
}

>Get Tasks
endpoint: GET /api/tasks

>Get task by ID
endpoint: GET /api/tasks/:id

>Update Task
endpoint: PUT /api/tasks/:id

>Delete Task
endpoint: DELETE /api/tasks/:id
