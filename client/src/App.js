import './App.scss';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import { useState, useEffect } from 'react'


function App() {

  const [todos, setTodos] = useState([]); //todos will be an array of objects. each object is a todo.


  //this is for fetching the data from api (the todos from database)
  useEffect( () => {
    fetch(`http://localhost:8000/api/all`)
    .then( (res) => {
      return res.json();
    })
    .then( (data) => {
      setTodos(data);
    })
    .catch( (err) => {
      console.log('error retrieving data', err);
    })
  }, []); //add empty array so this fires only on first render


  return (
    <div className="App">
      <Header />
      
      <div className="content">
        <Sidebar />
        <Dashboard todos={todos}/>
      </div>
    

    </div>
  );
}

export default App;
