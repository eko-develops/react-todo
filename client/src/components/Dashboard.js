import React from 'react'
import Cards from './Cards'

const Dashboard = ({todos, isError, isLoading}) => {
    return (
        <div className="dashboard">
            <div className="dashboard-wrapper">
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
                {isError ? "Could not find any records..." : <Cards todos={todos} />}
                </div>
            
                

                {/* End card container */}
            </div>
            
        </div>
    )
}

export default Dashboard
