# 🚀 Gen AI Query Engine

## 🛠️ **Project Overview**
The **Gen AI Query Engine** is a lightweight backend service that simulates a simplified version of a Gen AI-powered data query system.  
It allows you to:  
✅ Convert **natural language queries** into **pseudo-SQL**.  
✅ Validate and explain SQL queries.  
✅ Retrieve mock database responses.  
✅ Simulate AI-based query processing.  

---

## 🔥 **Tech Stack**

- **Backend:** Node.js with Express.js  
- **Database:** SQLite (in-memory storage)  
- **Authentication:** API Key-based lightweight authentication  
- **Deployment:** Render (Cloud Hosting Platform)  
- **Testing:** Postman Collection  

---

## 🚀 **API Endpoints**

### ✅ **1️⃣ /query Endpoint**
**Description:** Accepts a natural language query and returns the translated pseudo-SQL query with mock database results.  

#### 🚀 **Request**
```http
POST /query  
Content-Type: application/json  
Authorization: Bearer super_secret_key  
```
```json
{
  "query": "Show all users over 30"
}
```

#### ✅ **Response**
```json
{
  "translated_sql": "SELECT * FROM users WHERE age > 30;",
  "data": [
    { "id": 1, "name": "Alice", "age": 35 },
    { "id": 2, "name": "Bob", "age": 40 }
  ]
}
```

---

### ✅ **2️⃣ /explain Endpoint**
**Description:** Returns the breakdown of a natural language query.

#### 🚀 **Request**
```http
POST /explain  
Content-Type: application/json  
Authorization: Bearer super_secret_key  
```
```json
{
  "query": "List all employees with salary above 50000"
}
```

#### ✅ **Response**
```json
{
  "explanation": {
    "query": "List all employees with salary above 50000",
    "parsed_terms": ["employees", "salary", "> 50000"],
    "translation_steps": [
      "Identified table: employees",
      "Filtered by salary > 50000"
    ]
  }
}
```

---

### ✅ **3️⃣ /validate Endpoint**
**Description:** Validates a SQL query by checking its syntax and structure.

#### 🚀 **Request**
```http
POST /validate  
Content-Type: application/json  
Authorization: Bearer super_secret_key  
```
```json
{
  "query": "SELECT * FROM users WHERE age > 30;"
}
```

#### ✅ **Response**
```json
{
  "valid": true,
  "message": "Query is valid."
}
```

---

🔥 Installation & Setup
✅ 1️⃣ Clone the Repository

```bash
git clone https://github.com/korupoluAsritha/gen_ai_query_engine.git
cd gen_ai_query_engine
```
✅ 2️⃣ Install Dependencies

```bash
npm install
```
✅ 3️⃣ Run the Server Locally
```bash
node index.js
```
📌 The server will start at:

```bash
http://localhost:3000
```

---

## 🔥 Deployment Instructions
### ✅ 1️⃣ Deploy on Render

- Go to Render → Create a new service.

- Select Node.js as the environment.

- Connect your GitHub repository.

### Deploy the project.

✅ 2️⃣ Set Environment Variables: Go to Render → Environment Variables → Add New Variable

Add the following:

API_KEY = super_secret_key
---
✅ 3️⃣ Use the Build Command:

```bash
npm install && npm rebuild sqlite3
```
---
## 🔥 Postman Collection
### 🚀 To easily test the APIs:

- Import the Postman collection into Postman.

- Use the pre-configured requests to test all endpoints.
  ## live link (https://gen-ai-query-engine.onrender.com)
---
### ✅ Testing with CURL Commands You can also test the API using curl commands:

- ✅ 1️⃣ Query Endpoint 
```bash
curl -X POST "https://gen-ai-query-engine.onrender.com/query" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer super_secret_key" \
-d '{"query": "Show all users over 30"}'
```
- ✅ 2️⃣ Explain Endpoint
```bash
curl -X POST "https://gen-ai-query-engine.onrender.com/explain" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer super_secret_key" \
-d '{"query": "List all employees with salary above 50000"}'
```
- ✅ 3️⃣ Validate Endpoint
```bash
curl -X POST "https://gen-ai-query-engine.onrender.com/validate" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer super_secret_key" \
-d '{"query": "SELECT * FROM users WHERE age > 30;"}'
```
---
---

## 🛠️ Author
- 👩‍💻 Korupolu Asritha
- 📧 Email: korupoluasritha3@gmail.com
- 📞 Phone: +91 9398942787
- 🔗 GitHub: [korupoluAsritha](https://github.com/korupoluAsritha/gen_ai_query_engine)
- 🔗 LinkedIn: [KorupolAsrithau ](https://www.linkedin.com/in/asrithak3/)
---
---
