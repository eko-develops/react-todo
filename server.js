/*For setting up the server and calling the database connection */

require('dotenv').config()  //we want to require and configure dotenv as early as possible in our application
const connectDb = require('./db.js')    //import the connectDb function

const express = require('express') //web framework for nodejs
const app = express()
const PORT = process.env.PORT || 8000   //setting the port

connectDb();    //make the connection to the db when app starts

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`)
})