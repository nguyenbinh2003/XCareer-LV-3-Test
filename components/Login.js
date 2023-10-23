const database = require("../models/data");

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  if (username && password) {
    await database.findOne({ users: username }).then((data) => res.json(data));
  } else {
    res.json({ message: "no data" });
  }
};

module.exports = login;
