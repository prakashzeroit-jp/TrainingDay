# 🚀 TrainingDay

Welcome to the **TrainingDay** repository! This project serves as a step-by-step daily backend development tracking ledger containing core JavaScript fundamentals, asynchronous programming assignments, and an Express-Mongoose MVC API stack.

[![Node.js Version](https://shields.io)](https://nodejs.org)
[![Express Version](https://shields.io)](https://expressjs.com)
[![Mongoose Version](https://shields.io)](https://mongoosejs.com)

---

## 📂 Project Structure

```text
├── config/                  # Database connections
│   └── db.js                # MongoDB connection handler
├── controllers/             # Request handlers (Business Logic)
│   └── todoController.js    # Todo API creation logic
├── models/                  # Mongoose Schemas
│   └── todoModel.js         # Todo Task model definition
├── routes/                  # Route entry points
│   └── todoRoute.js         # Endpoint definitions
├── function/                # Core exercise folders
├── hold_day/                # Archived training resources
├── .gitignore               # Ignored system files (node_modules, .env)
├── server.js / index.js     # Express app bootstrapper entrypoints
├── package.json             # App scripts and project dependencies
└── *_day.js                 # Daily vanilla JavaScript training script logs
```

---



The core project inside this repository is a RESTful Todo application implementing the Model-View-Controller pattern.

### 1. Prerequisites
Ensure you have the following systems operational locally:
* [Node.js Runtime Engine](https://nodejs.org) (v16+)
* [MongoDB Community Server](https://mongodb.com) (Running locally on default port `27017`)

### 2. Environment Configurations
Create a `.env` file within your root project workspace folder to house local operational ports and authorization strings:
```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/todo_api_db
```

### 3. Setup and Run
Download dependencies and execute the live application server instance:
```bash
# Clone the repository
git clone https://github.com
cd TrainingDay

# Install dependent modules
npm install

# Start development workspace
node server.js
```

---

## 🛣️ Core Endpoint API Documentation

### Create a Task
* **URL Matrix Path:** `/api/creaate` or `/api/create`
* **HTTP Method:** `POST`
* **Content Headers:** `Content-Type: application/json`

#### 📥 Client Body Requirement (JSON format)
> **Crucial Hint:** Double check your payload format. Missing field separation commas or misspelling keys yields database validation rejections.
```json
{
  "tittle": "Complete comprehensive backend training session",
  "isCompleted": "false"
}
```

#### 📤 Server Success Contract (`200 OK`)
```json
{
  "success": true,
  "message": "todo created successfully!",
  "data": {
    "_id": "666cb42e56cf9e3d8b13a7c4",
    "tittle": "Complete comprehensive backend training session",
    "isCompleted": "false",
    "createdAt": "2026-06-14T17:53:12.144Z",
    "updatedAt": "2026-06-14T17:53:12.144Z",
    "__v": 0
  }
}
```

#### 📤 Server Catch Exception Block (`500 Internal Error`)
```json
{
  "success": false,
  "message": "invalid credentials!"
}
```

---

## 🔍 Daily Log Checklist

The root layout tracks vanilla syntax experiments sequentially:
* **`first_day.js` to `fourth_day.js`**: Primitive types, flow controls, scope hierarchies.
* **`fifth_day.js` to `twelve.day.js`**: Dynamic objects, mapping arrays, array callback routines.
* **`thirteen_day.js` to `seventeen_day.js`**: Promise blocks, async/await event routines (`22dayasync.txt`).
* **`server.js` integration**: Launching standalone node server infrastructures via Express.
