/** Gets all todos */

const Todo = require('../schemas/todo.js')

const getAllTodos = (req, res) => {
    Todo.find() //Schema.find() - returns all Todo's in the collection
    .then( (res) => {
        console.log('\nHere are all the Todos\n' , res);
    })
    .catch( (err) => {
        console.log('\nThere was an error in retrieving all the Todos\n', err);
    })
}

module.exports = {
    getAllTodos,
}