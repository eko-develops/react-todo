import './App.scss';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import { useState, useEffect } from 'react'


function App() {

  const [todos, setTodos] = useState([]); //todos will be an array of objects. each object is a todo.
  const [isError, setIsError] = useState(false);  //for display error messages
  const [isLoading, setIsLoading] = useState(true); //true because when app first starts there will be a delay to get data from database



  //this is for fetching the data from api (the todos from database)
  useEffect( () => {
    setTimeout(() => {
        fetch(`http://localhost:8000/api/all`)
          .then( (res) => {
            return res.json();
          })
          .then( (data) => {  //we got the data
            if(!data.length){ //find will return an empty array if there are no records
              setIsError(true)  //if there are no records show error
              setIsLoading(false)
            } else {
              setIsError(false); //set this to false just in case
              setIsLoading(false);
              setTodos(data);
            }
           
          })
          .catch( (err) => {  //we did not get the data
            setIsLoading(false);
            setIsError(true); //set error to true if there is one
            console.log('error retrieving data', err);
          })
        }, 800)  //imitate some lag when retrieving data
      }, []); //add empty array so this fires only on first render


      const newTodos = (data, todos) => {
        //if the ids do not match, add them to array. this will sort out the deleted todos without mutating state
        const filteredTodos = todos.filter( (todo) => {
          return todo._id !== data.id
        })

        
          // setTodos(filteredTodos) //this will cause the todos to re-render
        if(!filteredTodos.length){  //if the todo is empty after last deleting last todo, display error message
          setIsError(true)
             setTodos([])
        } else {
          setTodos(filteredTodos) //this will cause the todos to re-render
          setIsError(false)
        }
      }



      const deleteTodo = (id) => {
        console.log('Preparing to Delete:', id)

        fetch(`http://localhost:8000/api/delete/${id}`, {
          method: 'DELETE',
          headers: {
              'Content-type': 'application/json'
          }
        })
        .then( (res) => res.json())
        .then( (data) => {

          newTodos(data, todos)
          
          console.log('Todo Deletion Success\n', data) //#TEST
        })
        .catch( (err) => {
          console.log('Error deleting todo..\n', err)
        })

      }

    
  return (
    <div className="App">
      <Header setIsError={setIsError} todos={todos} setTodos={setTodos} />
      
      <div className="content">
        <Sidebar />
        <Dashboard todos={todos} deleteTodo={deleteTodo} isError={isError} isLoading={isLoading}/>
      </div>
    

    </div>
  );
}

export default App;
