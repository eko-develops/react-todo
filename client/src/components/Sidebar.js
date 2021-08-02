import React from 'react'

const Sidebar = ({handleAllTodoFilter, handleWorkTodoFilter, handlePersonalTodoFilter, handleImportantTodoFilter}) => {
    return (
        <div className="sidebar">
            <h5>Collections</h5>
            <ul>
                <li onClick={handleAllTodoFilter}>
                    All
                </li>
                <li onClick={handlePersonalTodoFilter}>
                    Personal
                </li>
                <li onClick={handleWorkTodoFilter}>
                    Work
                </li>
                <li onClick={handleImportantTodoFilter}>
                    Important
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
