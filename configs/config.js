const { default: mongoose } = require("mongoose");

const configDb = async () => {
    const envUrl = "mongodb://localhost:27017/data";
    try {
      await mongoose.connect(envUrl);
    } catch (error) {
      throw new Error(error);
    }
};

module.exports = configDb;
