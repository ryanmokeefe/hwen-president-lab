// var mongoose   = require("../moongose")
var seedData  = require("./seeds.json")

// var Candidate  = mongoose.model("Candidate")
const Candidate = require('./schema')

Candidate.remove({})
  .then(function () {
  return Candidate.collection.insert(seedData)
  })
  .then(() => {
    process.exit
})
