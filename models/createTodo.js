/** Creates a new todo */

const Todo = require('../schemas/todo.js')

const createTodo = async (req, res) => {

    const response = await Todo.create(req.body)
    .then( (data) => {
        console.log('\nTodo saved successfully. Check the database for record: \n' , data);
        return data
        // console.log(data)
    })
    .catch( (err) => {
        console.log('\nThere was an error creating the todo ...\n', err);
    })
    
    return response

}

module.exports = {
    createTodo,
}