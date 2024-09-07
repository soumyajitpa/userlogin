const mongoose = require('mongoose');
const val=require("./models/user");

const connectdb = async () => {
  try {
    await mongoose.connect('mongodb+srv://soumyapaul132:soumya%402004@cluster0.9oxxh.mongodb.net/Newlogin?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1); // Exit process with failure if unable to connect
  }
};

module.exports = connectdb;