# 🚀 Gen AI Query Engine

## 🌟 Project Overview
The **Gen AI Query Engine** is a lightweight backend service that:
- Accepts **natural language queries** and translates them into **pseudo-SQL**.  
- Simulates a simplified version of an **AI-powered data analytics system**.  
- Helps non-technical teams query data easily without SQL knowledge.

---

## 💡 Features
✅ **Natural Language to SQL:**  
- Converts natural language queries (e.g., "Show all users over 30") into SQL.

✅ **Explain Queries:**  
- Provides a breakdown of how the SQL is interpreted step by step.

✅ **Validation:**  
- Validates if the query is feasible and returns mock validation results.

✅ **Authentication:**  
- Lightweight authentication using an **API key** to secure the endpoints.

---

## 🌐 Live Deployment
🚀 You can access the live deployment here:  
- **[Gen AI Query Engine](https://gen-ai-query-engine.onrender.com)**

---

## 🔥 Tech Stack
- **Backend:** Node.js with Express.js  
- **Database:** SQLite (in-memory)  
- **Deployment:** Render  
- **API Testing:** Postman & `curl`  

---

## 🚀 Endpoints & Usage

### ➡️ `/query` Endpoint
**Description:**  
- Accepts a **natural language query** and returns the corresponding SQL query with mock results.

✅ **Request:**  
```json
POST /query  
{
  "query": "Show all users over 30"
}
POST /explain  
{
  "query": "List all employees with salary above 50000"
}
POST /validate  
{
  "query": "SELECT * FROM users WHERE age > 30;"
}

## 🔥 Installation & Setup

✅ 1. Clone the Repository
git clone https://github.com/korupoluAsritha/gen_ai_query_engine.git
cd gen_ai_query_engine

✅ 2. Install Dependencies
npm install
3.Run the Server Locally
node index.js

## 🔥 Deployment Instructions
###✅ Render Deployment
Deploy the project on Render.

Set environment variables:

API_KEY = super_secret_key
Use the build command:

npm install && npm rebuild sqlite3
🔥 Postman Collection
🚀 To easily test the APIs:

Import the Postman collection into Postman.

Use the saved requests to test all endpoints.
