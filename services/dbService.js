const { getDb } = require('../config/db');

const executeQuery = async (query) => {
  const db = getDb();
  return await db.collection(query.collection)
    .find(query.filter || {})
    .limit(query.options?.limit || 10)
    .toArray();
};

module.exports = { executeQuery };