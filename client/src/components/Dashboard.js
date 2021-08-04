import React from 'react'
import Cards from './Cards'
import Sidebar from './Sidebar'
import { useState } from 'react'

const Dashboard = ({todos, isError, isLoading, deleteTodo}) => {

    const [sortBy, setSortBy] = useState('')
    const [query, setQuery] = useState('')

    //sorting todo functions
    const handleAllTodoFilter = () => {
        setSortBy('')   //set to empty so we can display all todos
    }
    const handlePersonalTodoFilter = () => {
        setSortBy('personal')
    }
    const handleWorkTodoFilter = () => {
        setSortBy('work')
    }
    const handleImportantTodoFilter = () => {
        setSortBy('important')
    }

    const handleQuery = (e) => {
        setQuery(e.target.value)
    }

    return (
        <div className="dashboard">
            <Sidebar
            handleImportantTodoFilter={handleImportantTodoFilter}
            handleWorkTodoFilter={handleWorkTodoFilter}
            handlePersonalTodoFilter={handlePersonalTodoFilter}
            handleAllTodoFilter={handleAllTodoFilter}
            />
            <div className="dashboard-wrapper">
                <div className="center-dashboard">
                <h2>Dashboard</h2>
                <h3>Hello, John Smith</h3>
                <div className="important-sort">
                    <span>Sort By</span>
                    <div className="sort-buttons">
                        <button onClick={() => handleAllTodoFilter(todos)} type="button">All</button>
                        <button onClick={() => handlePersonalTodoFilter(todos)} type="button">Personal</button>
                        <button onClick={() => handleWorkTodoFilter(todos)} type="button">Work</button>
                        <button onClick={() => handleImportantTodoFilter(todos)} type="button">Important</button>
                    </div>
                    <p>Search by Keywords</p><input type="text" onChange={handleQuery} value={query} placeholder="search.."></input>
                </div>
                {/* End sorting buttons */}
                <div className="sub-wrapper">
                    {isLoading && <div className="loading">Loading.....</div>}
                    {isError ? "Could not find any records..." : <Cards query={query} deleteTodo={deleteTodo} sortBy={sortBy} todos={todos} />}
                </div>
            </div>  {/* End center dashboard */}        
        </div>  {/* End dashboard wrapper */}
    </div>
)}

export default Dashboard
