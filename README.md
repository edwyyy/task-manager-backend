# Task Manager Backend

A RESTful API built with **Node.js** and **MongoDB** that lets users register,
log in and manage personal tasks securely using JWT authentication.

## Features

* User registration & login
* Passwords hashed with **bcrypt**
* JWT‑based authentication
* CRUD operations for tasks
* Each user only sees/edits their own tasks

## Technologies

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?logo=json-web-tokens&logoColor=white)
![bcrypt](https://img.shields.io/badge/bcrypt-9f2d8c?logo=bcrypt&logoColor=white)

## Setup

```bash
git clone <repo-url>
cd task-manager-backend
npm install
npm run dev
```

Server listens on port `5000` → http://localhost:5000

## API Endpoints

### Authentication

**Register**  
`POST /api/auth/register`  
Body (JSON):

```json
{
  "name": "user_name",
  "email": "user_mail",
  "password": "user_password"
}
```

**Login**  
`POST /api/auth/login`  
Body:

```json
{
  "email": "user_mail",
  "password": "user_password"
}
```

### Tasks  
All task routes require an `Authorization: Bearer <JWT_TOKEN>` header.

* **Create task**  
  `POST /api/tasks`  
  Body:

  ```json
  {
    "title": " ",
    "description": " ",
    "status": "pending/completed"
  }
  ```

* **Get all tasks** – `GET /api/tasks`  
* **Get task by ID** – `GET /api/tasks/:id`  
* **Update task** – `PUT /api/tasks/:id`  
* **Delete task** – `DELETE /api/tasks/:id`