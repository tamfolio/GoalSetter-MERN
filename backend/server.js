const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const { errorHandler } = require('../backend/middleware/errorMiddleware')
const port = process.env.PORT || 5000
const connectDB = require('../backend/config/db')

connectDB()
const app = express()

//add body middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))