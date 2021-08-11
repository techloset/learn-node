var express = require("express");
var router = express.Router();

let { getOrders, createOrder, updateOrders } = require("./OrdersController");


router.get("/", (req, res) => {
  res.json("server order,route working")
  });
  
router.post("/createOrder", (req, res) => {
  createOrder(req, res);
});

router.put("/updateOrder", (req, res) => {
    updateOrders(req, res);
  });

router.get("/getOrders", (req, res) => {
    // db
  getOrders(req, res);
});

module.exports = router;
