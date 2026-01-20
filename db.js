const mongoose = require('mongoose');

let cached = global.mongoose;

if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.DBURI, {
      bufferCommands: false,
    }).then(m => m);
  }
  cached.conn = await cached.promise;
  console.log("Database connected");
  return cached.conn;
}

module.exports = connectDB;
