const Express              = require('Express')
const parse                = requier('./parser')
const hbs                  = requier('hbs')
const methodOverride       = require('method.override')
const canidateController   =  require('./controller/candidate.js')
const app                  = express()

app.use('/candidates/', candidatesContraller)

app.use(methodOverride('_method'))
app.use('/public', express.static('assets'))
app.use(bodyParser.json({extended: false}))

app.set(port, 3001)
app.set('view engine', hbs)
app.engine('.nbs', hbs({
  extName:        '.hbs',
  partials__dir:    '../views/',
  layouts__dir:     '../views/',
  default_layout:  'main'
}))


app.listen(app.get('port'), console.log(`✅ PORT ${app.get('port')} 🌟`))
