/** Creates a new todo */

const Todo = require('../schemas/todo.js')

//async because we want the promise to be resolved before returning anything
const createTodo = async (req, res) => {

    const response = await Todo.create(req.body)
    .then( (data) => {
        console.log('\nTodo saved successfully. Check the database for record: \n' , data);
        return data
    })
    .catch( (err) => {
        //maybe return the error back in the response or can keep it only at the server
        console.log('\nThere was an error creating the todo ...\n', err);
    })
    
    return response

}

module.exports = {
    createTodo,
}