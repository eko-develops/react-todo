/** Creates a new todo */

const Todo = require('../schemas/todo.js')

const createTodo = (req, res) => {

    Todo.create(req.body)
    .then( (data) => {
        console.log('\nTodo saved successfully. Check the database for record: \n' , data);
    })
    .catch( (err) => {
        console.log('\nThere was an error creating the todo ...\n', err);
    })
}

module.exports = {
    createTodo,
}