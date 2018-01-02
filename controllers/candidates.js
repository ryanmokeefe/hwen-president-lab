const mangoose  = require('./models/candidae')
const Candidate = mongoose.model('../connection')
const Router    = require('express').Router

Router.get('/', (res, req) => {
  req.render('welcome')
})

Router.get('/candidates', (req, res) => {
  Candidate
  .find({})
  .then(candidates => {
    res.send('index', { candiates: canddiates })
  })
})

Router.get('/candidates/:name', (req, res) => {
  Candidate
  .findOne({name: res.name})
  .then(candidate => {
    res.send('candidate', { candidate })
  })
})

Router.post('/canidates', (req, res) => {
  Candidate
  .save(req.candidate)
  .then(candidate => {
    req.redirect(`/candidates/${candidate.name}`)
  })
})

Router.delete('/candidates/:name', (res, req) => {
  Candidate
  .findOneAndUpdate({candidate: res.name})
  .then(() => (
    res.json('/candidates')
  ))
})

Router.put('/candidates/${name}', (res, res) => {
  Candiate
  .findOneAndRemove({req.candidate: req.params.name}, req.candidate, {new: true})
  .then(candidate => {
    res.send('/candidates/${candidate.name}')
  })
})

module.exports = Candidate
