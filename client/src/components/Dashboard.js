import React from 'react'
import Cards from './Cards'
import Sidebar from './Sidebar'
import { useState } from 'react'

const Dashboard = ({todos, isError, isLoading, deleteTodo}) => {

    const [sortBy, setSortBy] = useState('')
    const [query, setQuery] = useState('')

    //sorting todo functions
    //we could make these one liners, but we need to also pass the functions into the sidebar
    const handleAllTodoFilter = () => {
        setSortBy('')
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

    //handles the value of the input text for searching
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
                        <button onClick={() => handleAllTodoFilter()} type="button">All</button>
                        <button onClick={() => handlePersonalTodoFilter()} type="button">Personal</button>
                        <button onClick={() => handleWorkTodoFilter()} type="button">Work</button>
                        <button onClick={() => handleImportantTodoFilter()} type="button">Important</button>
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
