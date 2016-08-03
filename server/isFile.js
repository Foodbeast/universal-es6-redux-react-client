'use strict'

export default (req, res, next) => {

  const pattern = /(?:\.([^.]+))?$/
  const ext = pattern.exec(req.path)[1]

  if(ext) return res.status(404).send('File not found.')
  next()

}
