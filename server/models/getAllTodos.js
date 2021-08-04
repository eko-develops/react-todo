/** Gets all todos */

const Todo = require('../schemas/todo.js')

const getAllTodos = (req, res) => {
    Todo.find() //Schema.find() - returns all Todo's in the collection
    .then( (data) => {
            res.json(data)
            console.log('Successful Request Made to Get All Todos', data);
    })
    .catch( (err) => {
        res.status(404)
        .json({
            message: "There were no todos found",
            error: "There were no Todos found."
        })

        console.log('\nThere was an error in retrieving all the Todos\n', err);
    })
}

module.exports = {
    getAllTodos,
}