const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
     // "mongodb://localhost:27017"
      "mongodb+srv://admin:jasmeet@cluster0.rgkg3r1.mongodb.net/moodjournal?retryWrites=true&w=majority"
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Unable to connect to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;
