import React from 'react'

const header = () => {
    return (
        <header>
            <span className="brand">React To Do</span>
            <button type="button">Add Task</button>
            <button type="button">Search</button>
            <div className="user-icon"></div>
        </header>
    )
}

export default header
