var express = require("express");
const data = require("../components/Data");
const login = require("../components/Login");
var router = express.Router();

/* GET home page. */
router.get("/", data.getAllData);
router.get("/low-quantity", data.getDataByQuantity);
router.post("/login", login);

module.exports = router;
