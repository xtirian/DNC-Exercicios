function routes(app) {
  app.use('/users', require('./routes/users.js'))
}

module.exports = routes;