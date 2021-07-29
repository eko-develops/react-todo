import React from 'react'

const Cards = ({todos}) => {

    const theTodos = todos.map((todo) => 
                    <div className="card" key={todo._id}> 
                        <div className="card-header">
                            <h4 className="card-category">
                                {todo.title}
                            </h4>
                        </div>
                        <div className="card-details">
                            <input type="checkbox" value="todo-value"></input>
                            <label>{todo.description}</label>
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