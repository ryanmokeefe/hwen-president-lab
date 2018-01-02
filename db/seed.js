var mongoose   = require("../moongose")
var seedsData  = require("./seeds")

var Candidate  = mongoose.model("Canidate")

Candidate.remove({}).then(funciton(){
  Candidate.collection.create(seedData).then(()+>{
    pocess.exit
  })
})
