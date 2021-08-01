const mongoose = require('mongoose')


const TodoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        category: {
            type: String,
            required: true,
        }
    }, 
    {
        timestamps: true,   //displays timestamps on each record
    }
)

// https://www.geeksforgeeks.org/mongoose-mongoose-model-function/
//First argument: name of the model. the method pluraizes the name of the model and looks for a collection matching "todos"
const Todo = mongoose.model("todo", TodoSchema)

module.exports = Todo