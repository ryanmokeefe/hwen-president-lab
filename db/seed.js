var mongoose  = require("../models/candidate")
var seedData  = require("./seeds")

var Candidate = mongoose.model("Candidate")

Candidate.remove({}).then(function(){
  Candidate.collection.insert(seedData).then(function(){
    process.exit()
  })
})
