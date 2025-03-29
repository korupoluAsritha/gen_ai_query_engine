const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');  // In-memory DB

// Initialize mock data
const initializeDB = () => {
    db.serialize(() => {
        db.run(`CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)`);

        // Insert sample users
        db.run(`INSERT INTO users (name, age) VALUES ('Alice', 25), ('Bob', 30), ('Charlie', 35)`);
        db.run(`INSERT INTO users (name, age) VALUES ('David', 40), ('Eve', 22)`);
    });
};

module.exports = { db, initializeDB };