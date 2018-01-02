const mongoose = require('../db/connection')

var CandidateSchema = new mongoose.Schema(
  {
    name: String,
    year: Number
  }
)

mongoose.model("Candidate", CandidateSchema)

module.exports = mongoose
