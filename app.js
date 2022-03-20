const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const log4js = require('./utils/log4j.js')
const router = require('koa-router')()
const users = require('./routes/users')

// error handler
onerror(app)

require('./config/db')
// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  await next()
  log4js.info('log output')
})
// routes
router.prefix('/api') // 定义一级路由
router.use(users.routes(), users.allowedMethods())
app.use(router.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  log4js.error(`错误打印示范: ${err.stack}`)
});

module.exports = app
