/*For setting up the server and calling the database connection */

require('dotenv').config()  //we want to require and configure dotenv as early as possible in our application
const connectDb = require('./db.js')    //import the connectDb function

const express = require('express') //web framework for nodejs
const app = express()
const PORT = process.env.PORT || 8000   //setting the port

/**What these "middleware" functions do is before every 
 * request, they will detect form data/json payloads then 
 * parse them correctly and attach it to req.body" 
 * 
 * You need these middleware functions in order for the 
 * data to be present*/
app.use(express.json()) //json middleware
app.use(express.urlencoded({ extended: false }))

const { getAllTodos } = require('./models/getAllTodos')
const { createTodo } = require('./models/createTodo')
const { deleteTodo } = require('./models/deleteTodo')

connectDb();    //make the connection to the db when app starts

app.get('/api/all', (req, res) => {

    const allTodos = getAllTodos(req, res)
    //try finding a way to send back that server has received get request
    // res.send("SERVER - GET request made")

})


app.post('/api/create', (req, res) => {

    createTodo(req)
    res.send("SERVER - POST request made")

})


app.delete('/api/delete/:id', (req, res) => {


    deleteTodo(req)
    res.send({message: "SERVER - DELETE request made"})

})

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`)
})