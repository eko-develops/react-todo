import React from 'react'

const Cards = ({todos, deleteTodo, sortBy}) => {

    //handles the delete button for each todo
    const handleCardDelete = (e) => deleteTodo(e.target.id)


    const todoList = todos.filter((todo) => {
        if(sortBy){
            return todo.category === sortBy
        } else {
            return todo
        }
    }).map((todo) => 
    <div className="card" key={todo._id}> 
        <div className="card-header">
            <h4 className="card-category">
                {todo.category}
            </h4>
            <button type="button" id={todo._id} onClick={handleCardDelete}>Delete</button>
        </div>
        <div className="card-details">
            <input type="checkbox" value="todo-value"></input>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
        </div>
        <div className="goto-collection">
            <button type="button">Go to Collection</button>
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
