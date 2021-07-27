/** Creates a new todo */

const Todo = require('../schemas/todo.js')

const getAllTodos = (req, res) => {
    Todo.find() //Schema.find() - returns all Todo's in the collection
    .then( (res) => {
        console.log('this is the response' ,res);
    })
    .catch( (err) => {
        console.log('this is an error', err);
    })
}

module.exports = {
    getAllTodos,
}