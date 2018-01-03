const mongoose = require('mongoose')
const seedData = require('./seeds.json')

// { useMongoClient: true } is now default as of mongoose v5.
mongoose.connect('mongodb://localhost/hwen-president-lab')
    .then(() => console.log(`Connection established to db`))
        .catch((err) => console.log('Connection failed!', error))


// mongoose.connect(mongodbUrl, {useMongooseClient: true})
//   .then(_ => console.log(`Connection established to db '${conection.databaseName}'`))
//   .fail(err => console.log('Connection failed!', error))

mongoose.Promise = Promise
module.exports = mongoose
