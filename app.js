const express = require('express')
const authRoutes = require('./routes/auth')
const mainRoute = require('./routes/main')
const app = express()


app.use('/api/auth', authRoutes)
app.use('/', mainRoute)


module.exports = app