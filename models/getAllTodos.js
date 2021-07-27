/** Gets all todos */

const Todo = require('../schemas/todo.js')

const getAllTodos = (req, res) => {
    Todo.find() //Schema.find() - returns all Todo's in the collection
    .then( (data) => {
        // res.send("hello")
        console.log('\nHere are all the Todos\n' , data);
    })
    .catch( (err) => {
        console.log('\nThere was an error in retrieving all the Todos\n', err);
    })
}

module.exports = {
    getAllTodos,
}