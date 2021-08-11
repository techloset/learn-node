var mongoose = require("mongoose")

function dbConnection() {
  mongoose.connect(
    `mongodb+srv://naveed:1214@cluster0.hlgaz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useFindAndModify: false },
    function (err) {
      if (err) {
        console.log("err", err)
      } else {
        console.log("successfully connected")
      }
    }
  )
}

module.exports = dbConnection
