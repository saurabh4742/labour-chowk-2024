// server/utils/db.js
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://saurabhbebi:saurabh4742@cluster0.olfizpf.mongodb.net/";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Connected to MongoDB Atlas: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB Atlas: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
