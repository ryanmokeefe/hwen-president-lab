const mongoose = require('../db/connection')

// define a var as a - new mongoose.Schema({})
const CandidateSchema = new mongoose.Schema({
  name: String,
  year: Number
})

// define candidate model:
const Candidate = mongoose.model('Candidate', CandidateSchema)

// export Schema:
module.exports = Candidate
