
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Sequelize = require('sequelize')
const app = express()

app.use(express.json())
app.use(cors())


// make requests to database



const {userLogin, userSignup } = require('./controller/auth-controller.js')
const {userAddMovie, userAddTv, userAddBook, userAddGame, getMovies } = require('./controller/controller.js')


//auth endpoints
app.post('/api/login', userLogin)
app.post('/api/signUp', userSignup)

//form adds activities to database
app.post('/api/movie', userAddMovie)
app.post('/api/tv', userAddTv)
app.post('/api/book', userAddBook)
app.post('/api/game', userAddGame)

//to-do page
app.get('/api/getMovies/:userId', getMovies)


app.listen(process.env.SERVER_PORT, () => console.log('Server running on port 4000'))