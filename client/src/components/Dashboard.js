import React from 'react'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <h3>Hello, John Smith</h3>
            <div className="important-sort">
                <button type="submit">All</button>
                <button type="submit">Important</button>
            </div>
            <div className="cards-container">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-category">
                            Design
                        </h4>
                        <input type="checkbox" id="todo" name="todo1" value="todo-value"></input>
                        <label for="todo">This is a To Do</label>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h4 className="card-category">
                            Design
                        </h4>
                        <input type="checkbox" id="todo" name="todo1" value="todo-value"></input>
                        <label for="todo">This is a To Do</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
