var mongoose   = require("../controllers/candidates")
var seedData  = require("./seeds.json")

var Candidate  = require("../models/candidate")
// const Candidate = require('./schema')

Candidate.remove({})
  .then(function () {
  return Candidate.collection.insert(seedData)
  })
  .then(() => {
    process.exit
})
