function methodNotAllowed(req, res, next) {
  if(req.method !== 'GET') {
    return res.status(405).send('Method not allowed')
  }
  
  next()
}

module.exports = methodNotAllowed