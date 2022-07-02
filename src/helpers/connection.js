const mongoose = require("mongoose");

const connection = mongoose.connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true
    }
  );

module.exports = connection