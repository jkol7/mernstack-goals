const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')


const PORT = process.env.port || 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(errorHandler)


app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
console.log('Hello world')