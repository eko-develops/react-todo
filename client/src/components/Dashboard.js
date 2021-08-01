import React from 'react'
import Cards from './Cards'
import Sidebar from './Sidebar'


const Dashboard = ({todos, isError, isLoading, deleteTodo}) => {

    //sorting todo functions
    const handleAllTodoFilter = (allTodos) => {
        console.log('\nAll Todos', allTodos)
    }
    const handlePersonalTodoFilter = (allTodos) => {
        const personalTodos = allTodos.filter( (todo) => todo.category === 'personal')
        console.log('\nPersonal Todos', personalTodos)
    }
    const handleWorkTodoFilter = (allTodos) => {
        const workTodos = allTodos.filter( (todo) => todo.category === 'work')
        console.log('\nWork Todos', workTodos)
    }
    const handleImportantTodoFilter = (allTodos) => {
        const importantTodos = allTodos.filter( (todo) => todo.category === 'important')
        console.log('\nImportant Todos', importantTodos)
    }

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
                        <button onClick={() => handleAllTodoFilter(todos)} type="button">All</button>
                        <button onClick={() => handlePersonalTodoFilter(todos)} type="button">Personal</button>
                        <button onClick={() => handleWorkTodoFilter(todos)} type="button">Work</button>
                        <button onClick={() => handleImportantTodoFilter(todos)} type="button">Important</button>
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
