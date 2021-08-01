import React from 'react'
import Cards from './Cards'
import Sidebar from './Sidebar'


const Dashboard = ({todos, isError, isLoading, deleteTodo}) => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-wrapper">
                <div className="center-dashboard">

                <h2>Dashboard</h2>
                <h3>Hello, John Smith</h3>
                <div className="important-sort">
                    <span>Sort By</span>
                    <div className="sort-buttons">
                        <button type="submit">All</button>
                        <button type="submit">Personal</button>
                        <button type="submit">Work</button>
                        <button type="submit">Important</button>
                    </div>
                </div>
                {/* End sorting buttons */}
                <div className="sub-wrapper">
                    {isLoading && <div className="loading">Loading.....</div>}
                    {isError ? "Could not find any records..." : <Cards deleteTodo={deleteTodo} todos={todos} />}
                </div>
            
                
                </div>  {/* End center dashboard */}
                
            </div>  {/* End dashboard wrapper */}
            
        </div>
    )
}

export default Dashboard
