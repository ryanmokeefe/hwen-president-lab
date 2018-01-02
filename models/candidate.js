const mongoose = require('../db/conection')

var CandidateSchema = {
  name: Mongoose.Text,
  year: Mongoose.Integer
}


mongoose.model("Canditade", CandidateSchema)

module.exports = mongoose
