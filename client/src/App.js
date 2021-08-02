import './App.scss';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import { useState, useEffect } from 'react'


function App() {

  const [todos, setTodos] = useState([]); //todos will be an array of objects. each object is a todo.
  const [isError, setIsError] = useState(false);  //for display error messages
  const [isLoading, setIsLoading] = useState(true); //true because when app first starts there will be a delay to get data from database


  //this is for fetching the data from api (the todos from database)
  useEffect( () => {
    setTimeout(() => {
        fetch(`http://localhost:8000/api/all`)
          .then( (res) => res.json())
          .then( (data) => {  //we got the data
            if(!data.length){ //Mongoose.model.find will return an empty array if there are no records so we need to handle that
              setIsError(true)  //if there are no records found, show error
              setIsLoading(false) 
            } else {
              setIsError(false); //set this to false just to make sure there is no error showing when todos are present
              setIsLoading(false);    //set this to false to make sure there is no loading showing when todos are present
              setTodos(data);
            }
          })
          .catch( (err) => {  //we did not get the data
            setIsLoading(false);
            setIsError(true); //show the error if we cant retrieve data
            console.log('error retrieving data', err);
          })
        }, 800)  //imitate some lag when retrieving data
      }, []); //add empty array so this fires only on first render


      //this function will be passed down from App>Dashboard>Card for each card
      const deleteTodo = (id) => {
        console.log('Preparing to Delete:', id) //#TEST
        fetch(`http://localhost:8000/api/delete/${id}`, {
          method: 'DELETE',
          headers: {
              'Content-type': 'application/json'
          }
        })
        .then( (res) => res.json())
        .then( (data) => {
          newTodos(data, todos) //function to filter todos
          console.log('Todo Deletion Success\n', data) //#TEST
        })
        .catch( (err) => console.log('Error deleting todo..\n', err))
      }

      //this function will filter the deleted todo from todos and set the state of todos to the filtered todos
      const newTodos = (data, todos) => {
        //if the ids do not match, add them to array. this will sort out the deleted todos
        const filteredTodos = todos.filter( (todo) => todo._id !== data.id )

        if(!filteredTodos.length){  //if the todo is empty after last deleting last todo, display error message
            setIsError(true)
            setTodos([])
        } else {
            setTodos(filteredTodos) //this will cause the todos to re-render
            setIsError(false)
        }
      }

  return (
      <div className="App">
        <Header setIsError={setIsError} todos={todos} setTodos={setTodos} />
        <div className="content">
          <Dashboard todos={todos} deleteTodo={deleteTodo} isError={isError} isLoading={isLoading}/>
        </div>
      </div>
  );
}

export default App;
