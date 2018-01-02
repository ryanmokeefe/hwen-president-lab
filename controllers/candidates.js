const mongoose  = require('../models/candidate')
const Candidate = mongoose.model('Candidate')
const Router    = require('express').Router()

Router.get('/', (req, res) => {
  res.render('app-welcome')
})

Router.get('/candidates', (req, res) => {
  Candidate
  .find({})
  .then(candidates => {
    res.render('candidates-index', { candidates })
  })
})

Router.get('/candidates/:name', (req, res) => {
  Candidate
  .findOne({name: req.params.name})
  .then(candidate => {
    res.render('candidates-show', { candidate })
  })
})

Router.post('/candidates', (req, res) => {
  Candidate
  .create(req.body.candidate)
  .then(candidate => {
    res.redirect(`/candidates/${candidate.name}`)
  })
})

Router.delete('/candidates/:name', (req, res) => {
  Candidate
  .findOneAndRemove({name: req.params.name})
  .then(() => {
    res.redirect('/candidates')
  })
})

Router.put('/candidates/:name', (req, res) => {
  Candidate
  .findOneAndUpdate({name: req.params.name}, req.body.candidate, {new: true})
  .then(candidate => {
    res.redirect(`/candidates/${candidate.name}`)
  })
})

module.exports = Router
