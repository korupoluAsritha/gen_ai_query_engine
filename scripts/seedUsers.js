// scripts/seedUsers.js
require('dotenv').config();
const { MongoClient } = require('mongodb');
const faker = require('faker'); // For generating fake data

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function seedUsers() {
  try {
    await client.connect();
    const db = client.db('ai_queries');
    const usersCollection = db.collection('users');

    // Generate 20 fake users
    const users = Array.from({ length: 20 }, () => ({
      name: faker.name.findName(),
      email: faker.internet.email(),
      status: Math.random() > 0.3 ? 'active' : 'inactive', // 70% active
      lastLogin: faker.date.past(),
      createdAt: new Date()
    }));

    // Insert users
    const result = await usersCollection.insertMany(users);
    console.log(`Inserted ${result.insertedCount} users`);

  } finally {
    await client.close();
  }
}

seedUsers().catch(console.error);