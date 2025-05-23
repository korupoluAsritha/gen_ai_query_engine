const { MongoClient } = require('mongodb');

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(process.env.MONGO_URI)
      .then(client => {
        dbConnection = client.db();
        
        return cb();
      })
      .catch(err => {
        console.log('DB connection error:', err);
        return cb(err);
      });
  },
  getDb: () => dbConnection
};