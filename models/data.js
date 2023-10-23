const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const order = new Schema({
  order: Array,
});
const inventory = new Schema({
  inventory: Array,
});
const users = new Schema({
  users: Array,
});

const Order = mongoose.model("order", order);
const Inventory = mongoose.model("inventory", inventory);
const Users = mongoose.model("users", users);



module.exports = { Users, Inventory, Order };
