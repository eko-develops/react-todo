/** Delete a new todo */

const Todo = require('../schemas/todo.js')

const deleteTodo = (req, res) => {

    //findByIdAndRemove finds a matching document, removes it, and 
    //passes the found document (if any) to the callback
    Todo.findByIdAndRemove(req.params.id, req.body)
    .then( (data) => {
        console.log("\nRecord successfully deleted\n", data);
    })
    .catch( (err) => {
        console.log("\nRecord unsuccessfully removed\n", err)
    })
}

module.exports = {
    deleteTodo,
}