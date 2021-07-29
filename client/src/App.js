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
            setIsError(false); //set this to false just in case
            setIsLoading(false);
            setTodos(data);
          })
          .catch( (err) => {  //we did not get the data
            setIsLoading(false);
            setIsError(true); //set error to true if there is one
            console.log('error retrieving data', err);
          })
        }, 2000)  //imitate some lag when retrieving data
      }, []); //add empty array so this fires only on first render

    


  return (
    <div className="App">
      <Header />
      
      <div className="content">
        <Sidebar />
        <Dashboard todos={todos} isError={isError} isLoading={isLoading}/>
      </div>
    

    </div>
  );
}

export default App;
