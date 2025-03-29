# Mini Data Query Simulation Engine 🚀  
A lightweight backend service that simulates a simplified AI-powered data query system.  

## 🔥 Features  
✅ **Natural Language Query Processing** (`/api/query`)  
✅ **Query Explanation** (`/api/explain`)  
✅ **Query Validation** (`/api/validate`)  
✅ **Mock Database Connection**  
✅ **Basic Authentication & Error Handling**  
✅ **Deployable & Well-Documented API**  

## 🛠️ Tech Stack  
- **Backend**: Node.js, Express.js  
- **Database**: In-memory JSON (`mockDB.json`)  
- **Authentication**: API Key-based security  
- **Deployment**: [Render](https://mini-query-engine-3svs.onrender.com)  

---

## 📌 API Endpoints  

### **1️⃣ Query Processing**  
🔹 **POST** `https://mini-query-engine-3svs.onrender.com/api/query`  

**Description**: Accepts a natural language query and returns mock data.  

#### **Request Body** (JSON):  
```json
{ "query": "List all users" }
```

#### **Response Example**:  
```json
{
  "query": "List all users",
  "data": [
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" }
  ]
}
```

---

### **2️⃣ Query Explanation**  
🔹 **GET** `https://mini-query-engine-3svs.onrender.com/api/explain?query=List all users`  

**Description**: Returns a breakdown of how the query is processed.  

#### **Response Example**:  
```json
{
  "originalQuery": "List all users",
  "explanation": "This query fetches relevant data using: SELECT * FROM users"
}
```

---

### **3️⃣ Query Validation**  
🔹 **POST** `https://mini-query-engine-3svs.onrender.com/api/validate`  

**Description**: Checks if a query is in a valid format.  

#### **Request Body**:  
```json
{
  "query": "List all users"
}
```

#### **Response Example**:  
```json
{
  "query": "List all users",
  "isValid": true
}
```

---

## 🔑 Authentication  
All requests must include an API Key in the headers:  

#### **Headers Example**:  
```json
{
  "api-key": "YOUR_API_KEY_HERE"
}
##🔐 Security Note: Set your API key in a .env file or as an environment variable. Never expose sensitive credentials in public repositories.

```

---

## 🚀 Deployment & Setup  
### 🔹 Local Setup  
Clone the repository:  
```sh
git clone https://github.com/SuhelSharma/MINI-QUERY-ENGINE.git
cd MINI-QUERY-ENGINE
```

Install dependencies:  
```sh
npm install
```

Set up environment variables (`.env` file):  
```sh

PORT=5000

API_KEY=YOUR_API_KEY_HERE

```

Start the server:  
```sh
npm start
```

The server will be running at:  
```
http://localhost:5000
```

---

## 🤞 Testing API (Postman / Curl)  

### 📌 Postman Example for `/api/explain`  
**Method**: GET  
**URL**:  
```
https://mini-query-engine-3svs.onrender.com/api/explain?query=List all users
```

#### **Headers**:  
```

api-key: YOUR_API_KEY_HERE

```

#### **Response**:  
```json
{
  "originalQuery": "List all users",
  "explanation": "This query fetches relevant data using: SELECT * FROM users"
}
```

---

### 📌 Curl Example  
```sh

curl -X GET "https://mini-query-engine-3svs.onrender.com/api/explain?query=List all users" -H "api-key: mysecretkey123"

```

---

## 📝 Project Structure  
```
/MINI-QUERY-ENGINE
├── /data                  # Mock database (mockDB.json)
├── /src
│   ├── /controllers       # API Logic
│   │   ├── explainController.js
│   │   ├── queryController.js
│   │   ├── validateController.js
│   ├── /middlewares       # Authentication & Error Handling
│   │   ├── authMiddleware.js
│   │   ├── errorHandler.js
│   │   ├── validateQuery.js
│   ├── /routes            # API Routes
│   │   ├── queryRoutes.js
│   ├── /utils             # Query Translator & Validator
│   │   ├── queryTranslator.js
│   │   ├── sqlValidator.js
│   ├── /tests             # Unit Tests
│   │   ├── auth.test.js
│   │   ├── explain.test.js
│   │   ├── query.test.js
│   │   ├── validation.test.js
├── app.js                 # Express App Setup
├── server.js              # Entry Point
├── .env                   # Environment Variables
├── .gitignore             # Git Ignore File
├── mini-query-engine.postman_collection.json  # Postman Collection
├── package-lock.json      # Dependency Lock File
├── package.json           # Project Metadata
├── README.md              # Documentation
├── /node_modules          # Dependencies (Auto-generated)
```

---

## 🏆 Contributing  


# Waiting for the interview call


