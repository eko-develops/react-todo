import React from 'react'

const Cards = ({todos, deleteTodo}) => {

    const handleCardDelete = (e) => {
        const buttonId = e.target.id

        deleteTodo(buttonId)
        
    }

    //create the structure of the todo using map
    const theTodos = todos.map((todo) => 
                    <div className="card" key={todo._id}> 
                        <div className="card-header">
                            <h4 className="card-category">
                                {todo.category}
                            </h4>
                            <button type="button" id={todo._id} onClick={handleCardDelete} >Delete</button>
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
            {theTodos}
        </div>
       
    )
}

export default Cards
