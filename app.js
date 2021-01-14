const express = require('express')
const bodyParser = require('body-parser')

//routePaths
const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const positionRoutes = require('./routes/position')
const orderRoutes = require('./routes/order')
const categoryRoutes = require('./routes/category')
const app = express()
//App
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/client/auth', authRoutes)
app.use('/api/client/analytics', analyticsRoutes)
app.use('/api/client/position', positionRoutes)
app.use('/api/client/order', orderRoutes)
app.use('/api/client/category', categoryRoutes)


module.exports = app