const mongoose = require('moongose')
const seedData = require('./seeds.json')

mongoose.connect('mongodb:/localhost/hwen-president-lab', {useMongooseClient: true})
    .then(() => console.log(`Connection established to db`))
        .catch((err) => console.log('Connection failed!', error))


// mongoose.connect(mongodbUrl, {useMongooseClient: true})
//   .then(_ => console.log(`Connection established to db '${conection.databaseName}'`))
//   .fail(err => console.log('Connection failed!', error))

mongoose.Promise = Promise
exports = mongoose
