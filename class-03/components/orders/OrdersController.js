var orderModal = require("./OrdersModal");

module.exports.createOrder = (req, res) => {
  const newOrder = new orderModal({
    orderId: req.body.id,
    createdAt: new Date(),
    date: req.body.date,
  });

  newOrder.save((err, success) => {
    console.log("success", success);
    console.log("err", err);
    if (err) {
      res.send("err happen");
    }
    res.send("order added successfully");
  });
};

module.exports.getOrders = (req, res) => {
  orderModal.find({}, (err, data) => {
    console.log("success", data);
    console.log("err", err);
    if (err) {
      res.send("err happen");
    }
    res.json(data);
  });
};

module.exports.updateOrders = (req, res) => {
  orderModal.updateOne(
    { date: "some date" },
    { createAt: new Date() },
    (err, data) => {
      console.log("success", data);
      console.log("err", err);
      if (err) {
        res.send("err happen");
      }
      res.json(data);
    }
  );
};
