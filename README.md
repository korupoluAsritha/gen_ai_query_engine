🚀 Gen AI Query Engine
🛠️ Project Overview
The Gen AI Query Engine is a lightweight backend service that simulates a simplified version of a Gen AI-powered data query system.
It allows you to:
✅ Convert natural language queries into pseudo-SQL.
✅ Validate and explain SQL queries.
✅ Retrieve mock database responses.
✅ Simulate AI-based query processing.

🔥 Tech Stack
Backend: Node.js with Express.js

Database: SQLite (in-memory storage)

Authentication: API Key-based lightweight authentication

Deployment: Render (Cloud Hosting Platform)

Testing: Postman Collection

🚀 API Endpoints
✅ 1️⃣ /query
Description: Accepts a natural language query and returns the translated pseudo-SQL query with mock database results.

📌 Request:

json
Copy
Edit
POST /query  
{
  "query": "Show all users over 30"
}
📌 Response:

json
Copy
Edit
{
  "translated_sql": "SELECT * FROM users WHERE age > 30;",
  "data": [
    { "id": 1, "name": "Alice", "age": 35 },
    { "id": 2, "name": "Bob", "age": 40 }
  ]
}
✅ 2️⃣ /explain
Description: Returns the breakdown of a natural language query, explaining how it would be processed.

📌 Request:

json
Copy
Edit
POST /explain  
{
  "query": "List all employees with salary above 50000"
}
📌 Response:

json
Copy
Edit
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
✅ 3️⃣ /validate
Description: Checks the feasibility of a SQL query by validating its syntax and structure.

📌 Request:

json
Copy
Edit
POST /validate  
{
  "query": "SELECT * FROM users WHERE age > 30;"
}
📌 Response:

json
Copy
Edit
{
  "valid": true,
  "message": "Query is valid."
}
🔥 Installation & Setup
✅ 1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/korupoluAsritha/gen_ai_query_engine.git
cd gen_ai_query_engine
✅ 2️⃣ Install Dependencies
bash
Copy
Edit
npm install
✅ 3️⃣ Run the Server Locally
bash
Copy
Edit
node index.js
📌 The server will start at:

arduino
Copy
Edit
http://localhost:3000
🔥 Deployment Instructions
✅ 1️⃣ Deploy on Render
Render URL: Live Project

✅ 2️⃣ Set Environment Variables:
Go to Render → Environment Variables → Add New Variable

Add the following:

ini
Copy
Edit
API_KEY = super_secret_key
✅ 3️⃣ Use the Build Command:
bash
Copy
Edit
npm install && npm rebuild sqlite3
🔥 Postman Collection
🚀 To easily test the APIs:

Import the Postman collection into Postman.

Use the pre-configured requests to test all endpoints.

📌 Postman Collection Link:
Postman Collection

✅ Testing with CURL Commands
You can also test the API using curl commands:

🚀 1️⃣ Query Endpoint
bash
Copy
Edit
curl -X POST "https://gen-ai-query-engine.onrender.com/query" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer super_secret_key" \
-d '{"query": "Show all users over 30"}'
🚀 2️⃣ Explain Endpoint
bash
Copy
Edit
curl -X POST "https://gen-ai-query-engine.onrender.com/explain" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer super_secret_key" \
-d '{"query": "List all employees with salary above 50000"}'
🚀 3️⃣ Validate Endpoint
bash
Copy
Edit
curl -X POST "https://gen-ai-query-engine.onrender.com/validate" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer super_secret_key" \
-d '{"query": "SELECT * FROM users WHERE age > 30;"}'
🚀 Project Structure
plaintext
Copy
Edit
📁 gen_ai_query_engine  
 ┣ 📁 db  
 ┃ ┣ 📄 mockDB.js          # In-memory database with mock data  
 ┣ 📁 routes  
 ┃ ┣ 📄 queryRoutes.js     # Routes for the endpoints  
 ┣ 📁 node_modules         # Installed dependencies  
 ┣ 📄 postman_collection.json  # Postman collection file  
 ┣ 📄 index.js             # Main server file  
 ┣ 📄 .gitignore           # Git ignore settings  
 ┣ 📄 package.json         # Dependencies and project info  
 ┣ 📄 README.md            # Project documentation  
🛠️ Author
👩‍💻 Korupolu Asritha
📧 Email: korupoluasritha3@gmail.com
📞 Phone: +91 9398942787
🔗 GitHub: korupoluAsritha

