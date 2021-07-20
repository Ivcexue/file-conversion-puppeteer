const Koa = require('koa')
// const path = require('path')
const cors = require('koa2-cors')
// const koaBody = require('koa-body')
const bodyParser = require('koa-bodyparser')
const PORT = require('./config').CURRENT_PORT
const InitMange = require('./utils/initRouter')
const nacosInit = require('./utils/nacosInint')

// const catchErrors = require('./middlewares/catchError')

const app = new Koa()

app.use(cors())

app.use(bodyParser({
  enableTypes: ['json', 'form', 'text'],
  formLimit: '10mb',
  queryString: {
    parameterLimit: 1024 * 50
  }
}))


// app.use(catchErrors)

// app.use(koaBody({
//   multipart: true,
//   formidable: {
//     uploadDir: path.join(__dirname, './tmp'),
//     keepExtensions: true,
//     // maxFieldsSize: 200 * 1024 * 1024
//   }
// }))


InitMange.initCore(app)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`)

  nacosInit()
})
