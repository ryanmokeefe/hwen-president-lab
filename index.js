const express              = require('express')
const parser               = require('body-parser')
const hbs                  = require('express-handlebars')
const methodOverride       = require('method-override')
const candidatesController = require('./controllers/candidates.js')
const app                  = express()

app.use(methodOverride('_method'))
app.use('/assets', express.static('public'))
app.use(parser.urlencoded({extended: true}))

app.set('port', 3001)
app.set('view engine', 'hbs')
app.engine('.hbs', hbs({
  extname:        '.hbs',
  partialsDir:    'views/',
  layoutsDir:     'views/',
  defaultLayout:  'layout-main'
}))

app.use('/', candidatesController)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT ${app.get('port')} 🌟`)
})
