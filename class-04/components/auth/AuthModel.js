var mongoose = require("mongoose")
var authSchema = mongoose.Schema({
  name: {
    type: String,
      required:true
  },
  email: {
    type: String,
      required:true
  },
  password: {
    type: String,
    required:true
  },
  createdAt: {
    type: String,
    required: true,
  },
})
var authModels = mongoose.model("users", authSchema)
module.exports = authModels