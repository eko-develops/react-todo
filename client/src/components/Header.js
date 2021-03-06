import {React, useState } from 'react'
import Modal from 'react-modal'

//custom styles for the modal
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#20212c',
      borderRadius: '10px',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      border: 'none',
      padding: '2rem'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  };

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const Header = ({todos, setTodos, setIsError}) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false) //by default the modal will be closed
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("personal")    //by default category is set to personal


    //handles opening the modal
    const openModal = () => {
        setIsModalOpen(true);
    }
    //handles closing the modal
    const closeModal = () => {
        setIsModalOpen(false)
    }

    //handles setting state for title and description.
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    //handles the state for the select field for choosing category
    const handleCategorySelect = (e) => {
        setCategory(e.target.value)
    }

    //post data to endpoint /api/create
    //when creating a todo, we'll put all the values in an object then pass the object into this function
    //we can put this into a custom hook
    const postNewTodo = (data) => {
        fetch('http://localhost:8000/api/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then( (res) => res.json()) //the response from the endpoint is sent back as json so we need to parse it
        .then( (data) => {
            console.log('Todo added successfully\n', data)  //#TEST

            const concatNewTodo = todos.concat(data)    //we'll use concat to add the new todo to the list without mutating the state
            setTodos(concatNewTodo) //causes the todos to re-render with new todo added
            setIsModalOpen(false);
            
            // if the app starts wtih no records isError is true
            // so when a new todo is added, set error to false
            // so the no records found message does not appear
            setIsError(false);  
        })
        .catch( (err) => {
            console.log('Error adding todo\n', err);
        })
    }

    //handles adding a new task
    const handleAddTask = (e) => {
        e.preventDefault();

        console.log(`Attempting to add new task\nTitle: ${title}\nDescription: ${description}\nCategory: ${category}`) //#TEST

        //We'll create an object with the data given and call the postNewtodo function with the newTask object
        const newTask = {
            title: title,
            description: description,
            category: category,
        }
      
        //after preparing the data to be sent to server, we will send a post request
        postNewTodo(newTask);   

        //reset the states after clicking add
        setTitle("")
        setDescription("")

    }

    return (
        <header>
            <h1 className="brand">React To Do</h1>
            <nav>
                {/* This button handles the modal, maybe we can separate this from header */}
                <button type="button" onClick={openModal}>Add Task</button>
            </nav>

            {/* The modal 
            https://github.com/reactjs/react-modal
            https://reactcommunity.org/react-modal/
            */}
            <Modal
                    isOpen={isModalOpen}   //is the modal open
                    // onAfterOpen={afterOpenModal} //if we need to fire anything after the modal opens
                    onRequestClose={closeModal} //closing the modal
                    style={customStyles}    //add styles
                    contentLabel="New Task Modal"
                >
                    <h2>Add a New Task</h2>
                    <form className="add-task-form">
                        <div className="add-task-form-wrapper">
                            <label>Title</label>
                            <input onChange={handleTitleChange} value={title} type="text" />
                            <label>Notes</label>
                            <textarea onChange={handleDescriptionChange} value={description} col="25" row="6" />
                            <label htmlFor="category">Category</label>
                            <select onChange={handleCategorySelect} name="category" id="category">
                                <option value="personal">Personal</option>
                                <option value="work">Work</option>
                                <option value="important">Important</option>
                            </select>
                            <div className="sort-buttons">
                                <button onClick={handleAddTask}>Add Task</button>
                                <button onClick={closeModal}>Cancel</button>
                            </div>
                        </div>
                        
                        
                    </form>
                </Modal>

        </header>
    )
}

export default Header
