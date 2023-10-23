const { Users, Inventory, Order } = require("../models/data");

const data = {
  getAllData: async (req, res) => {
    try {
      const user = await Users.find().then((data) => data);
      const inventory = await Inventory.find().then((data) => data);
      const order = await Order.find().then((data) => data);
      console.log(user, inventory, order);
      res.json(user, inventory, order);
    } catch (error) {
      throw new Error(error);
    }
  },
  getDataByQuantity: async (req, res) => {
    try {
      await database
        .find({ quantity: { $lt: 100 } })
        .then((data) => res.json(data));
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = data;
