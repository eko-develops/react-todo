import React from 'react'

const Cards = ({todos, deleteTodo, sortBy, query}) => {

    const todoList = todos.filter((todo) => {
        if(sortBy){ //if sortBy is set we'll use the "key" for the sort
            return todo.category === sortBy
        } else {//if sort not set just display all
            return todo
        }
    }).filter((todo) => todo.title.includes(query) || todo.description.includes(query)  //we'll filter by query here. should be able to search whether we are filtering by category or not
        ).map((todo) => //create the structure of each todo after filtering
    <div className="card" key={todo._id}> 
        <div className="card-header">
            <h4 className="card-category"> {todo.category} </h4>
            <button type="button" id={todo._id} onClick={(e) => deleteTodo(e.target.id) }>Delete</button>
        </div>
        <div className="card-details">
            <input type="checkbox" value="todo-value"></input>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
        </div>
     </div>
);

    return (
        <div className="cards-container">
            {todoList}
        </div>
    )
}

export default Cards
