const Router = require('koa-router')
const router = new Router({
  prefix: '/file'
})

const fs = require('fs')
const puppeteer = require('puppeteer')

const pdfOptions = require('../../config/options')
const HtmlTemplate = require('../../config/htmlTemplate')


router.post('/file-conversion', async ctx => {
  const tmpDir = process.cwd() + '/tmp'

  const content = await ctx.request.body.content || ''
  if (!content) throw('请传入content！')

  const isExists = fs.existsSync(tmpDir)
  if (!isExists) fs.mkdirSync(tmpDir)

  const htmlContent = await HtmlTemplate({content})

  const browser = await puppeteer.launch({
    args: ['--disable-dev-shm-usage', '--no-sandbox'],
    timeout: 0,
    // headless: false
  })

  const page = await browser.newPage()
  await page.setContent(htmlContent, {
    timeout: 0
  })

  const pdfBuffer = await page.pdf(pdfOptions)

  ctx.set({
    'Content-Type': 'application/pdf;charset=utf-8',
    'Content-Length': pdfBuffer.length
  })
  ctx.body = pdfBuffer
})


module.exports = router
