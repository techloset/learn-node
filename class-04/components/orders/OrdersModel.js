var mongoose = require("mongoose")
var orderSchema = mongoose.Schema({
  orderId: String,
  createdAt: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
})
var orderModels = mongoose.model("orders", orderSchema)
module.exports = orderModels