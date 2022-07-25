const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')


const PORT = process.env.port || 5000
const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(errorHandler)


app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
console.log('Hello world')