const mongoose = require("mongoose");

const connectDb = async (req, res) => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://choparcargo:jw3JXgZnETtYAvKI@cluster0.guk9hmo.mongodb.net/users",
      {
        useNewUrlParser: true,
      }
    );
    console.log(`mongodb connected to: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
