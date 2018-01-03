// const mongoose  = require('./models/candidate')
const mongoose  = require('mongoose')
// require express: 
const express   = require('express')
const Candidate = require('../models/candidate')
const Router    = express.Router()


    // // is this needed in controllers? nope
    // Router.get('/', (req, res) => {
    //   res.render('app-welcome')
    // })
// get main page (blank '/')
Router.get('/', (req, res) => {
  Candidate.find({})
  .then((candidate) => {
    // render all with candidates-index, (plural) candidates: candidate(one)
    res.render('candidates-index', { candidates: candidate })
  })
  .catch((err) => {
    console.log(err)
  })
})


// get one by requesting specific name
Router.get('/:name', (req, res) => {
                  let name = req.params.name
  Candidate.findOne({name: req.params.name})
  .then((candidate) => {
    // render one candidate (candidates-show)
    // (single) candidate: (single) candidate
    res.render('candidates-show', { candidate: candidate })
  })
  .catch((err) => {
    console.log(err)
  })
})


// use blank '/' unless requesting specific item
Router.post('/', (req, res) => {
  // not '.then'; use .create when adding an item
  // .create() to attach to body
  Candidate.create(req.body.candidate)
  .then((candidate) => {
    // old: req.redirect(`/candidates/${candidate.name}`)
    // use candidates link, then specific name link: `/candidates/${candidate.name}`; use BACKTICS
    res.redirect(`/candidates/${candidate.name}`)
  })
  .catch((err) => {
    console.log(err)
  })
})
///////////////////////////////

Router.delete('/:name', (req, res) => {
  // Candidate is the object already being searched, req.params.name is the NAME field we're looking for:
  // old: (edited) Candidate.findOneAndRemove({candidate: req.params.name})
  Candidate.findOneAndRemove({name: req.params.name})
  .then(() => {
    // res.json for delete? // Nope: use redirect to go back to main candidates link
    res.redirect('/candidates')
  })
  .catch((err) => {
    console.log(err)
  })
})

Router.put('/:name', (req, res) => {
  Candidate
  .findOneAndUpdate({name: req.params.name}, req.body.candidate, {new: true})
  .then(candidate => {
    res.redirect(`/candidates/${candidate.name}`)
  })
  .catch((err) => {
    console.log(err)
  })
})

module.exports = Router
