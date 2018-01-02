const Express              = require('Express')
const parser               = require('body-parser')
const hbs                  = require('express-handlebars')
const methodOverride       = require('method-override')
const controller           = require('./controllers/candidates.js')
const app                  = express()

app.use('/candidates', controller)

app.use(methodOverride('_method'))
app.use('/assets', express.static('public'))
app.use(parser.urlencoded({extended: true}))
app.use(parser.json({extended: false}))

app.set(port, process.env.PORT || 3001)
app.set('view engine', hbs)
app.engine('.hbs', hbs({
  extName:          '.hbs',
  // double underscores?
  partials__dir:    './views/',
  layouts__dir:     './views/',
  default_layout:   'layout-main'
}))

app.get('/', (req, res) => {
  res.render('app-welcome')
})

// app.get is followed by function?
app.listen(app.get('port'), console.log(`✅ PORT ${app.get('port')} 🌟`))
