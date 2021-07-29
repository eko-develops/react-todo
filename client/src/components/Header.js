import React from 'react'

const header = () => {
    return (
        <header>
            <h1 className="brand">React To Do</h1>
            <nav>
                <button type="button">Add Task</button>
                <button type="button">Search</button>
                <div className="user-icon"></div>
            </nav>

        </header>
    )
}

export default header
