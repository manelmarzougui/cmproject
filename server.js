const express = require('express')
const connectDB = require('./config/dbconnect')
const app = express()
const cors = require('cors')
const passport = require('passport')

require('dotenv').config()

//connect to DB
connectDB()

//routes
app.use(express.json())
app.use(cors())
//running passport
app.use(passport.initialize())
app.use('/user', require('./routes/user'))

// app.use("/panier", require("./routes/panier"));

//server
const PORT = process.env.PORT

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on ${PORT}`)
)
