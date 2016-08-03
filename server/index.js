'use strict'

//import path from 'path'
import Express from 'express'
import renderMiddleware from './renderMiddleware'
import isFile from './isFile'

const app = Express()
const port = 3000

app.use('/static', Express.static('static'))
// This checks to see if any file extensions come through the request and are not matched. We want to throw an immediate 404 from express rather than boot the app
app.use(isFile)
app.use(renderMiddleware)

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🍔  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
