import React from 'react'

const Card = () => {
    return (
        <div className="card">
                        <div className="card-header">
                            <h4 className="card-category">
                                Design
                            </h4>
                        </div>
                        <div className="card-details">
                            <input type="checkbox" id="todo" name="todo1" value="todo-value"></input>
                            <label for="todo">This is a To Do</label>
                        </div>
                        <div className="goto-collection">
                            <button type="button">Go to Collection</button>
                        </div>
        </div>
    )
}

export default Card
