
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Sequelize = require('sequelize')
const app = express()

app.use(express.json())
app.use(cors())


// make requests to database



const {userLogin, userSignup} = require('./controller/auth-controller.js')

//auth endpoints
app.post('/api/login',userLogin)
app.post('/api/signUp',userSignup)


app.listen(process.env.SERVER_PORT, () => console.log('Server running on port 5500'))