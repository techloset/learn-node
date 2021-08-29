var express = require("express");
var router = express.Router();

let { getOrders, createOrder, updateOrders } = require("./OrdersController");
const verifyToken  = require('../../middleware/AuthMiddleware')

router.get("/", (req, res) => {
  res.json("server order,route working")
  });
  
router.post("/createOrder", verifyToken, (req, res) => {
  createOrder(req, res);
});

router.put("/updateOrder",verifyToken, (req, res) => {
    updateOrders(req, res);
  });

router.get("/getOrders",verifyToken, (req, res) => {
    // db
  getOrders(req, res);
});

module.exports = router;


