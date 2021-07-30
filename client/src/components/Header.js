import {React, useState } from 'react'
import Modal from 'react-modal'

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
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  };

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const Header = () => {

    const [isModalOpen, setIsModalOpen] = useState(false) //by default the modal will be closed

    //is there a way we condense these states into one? maybe in an object?
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    //handles opening the modal
    const openModal = () => {
        setIsModalOpen(true);
    }

    //handles closing the modal
    const closeModal = () => {
        setIsModalOpen(false)
    }

    //handles setting state for title and description.
    //is there a way to condense these handle functions into one?
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    //post data to endpoint /api/create
    //when creating a todo, we'll put all the values in an object then pass the object into this function
    const postNewTodo = (data) => {
        fetch('http://localhost:8000/api/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then( (res) => res.text())
        .then( (data) => {
            console.log('Todo added successfully')
        })
        .catch( (err) => {
            console.log('Error adding todo\n', err);
        })
    }


    const handleAddTask = (e) => {
        e.preventDefault();

        console.log(`Attempting to add new task\nTitle: ${title}\nDescription: ${description}`)

        //We'll create an object with the data given and call the postNewtodo function with the newTask object
        const newTask = {
            title: title,
            description: description,
        }
      
        postNewTodo(newTask);

        //reset the states after clicking add
        setTitle(" ")
        setDescription(" ")

    }

    return (
        <header>
            <h1 className="brand">React To Do</h1>
            <nav>

                {/* This button handles the modal, maybe we can separate this from header */}
                <button type="button" onClick={openModal}>Add Task</button>
                <button type="button">Search</button>
                <div className="user-icon"></div>
            </nav>

            {/* The modal 
            https://github.com/reactjs/react-modal
            https://reactcommunity.org/react-modal/
            */}
            <Modal
                    isOpen={isModalOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
                    <h2>Add a New Task</h2>
                    <form className="add-task-form">
                        <label>Title</label>
                        <input onChange={handleTitleChange} value={title} type="text" />
                        <label>Notes</label>
                        <textarea onChange={handleDescriptionChange} value={description} col="25" row="6" />
                        <div className="sort-buttons">
                            <button onClick={handleAddTask}>Add Task</button>
                            <button onClick={closeModal}>Cancel</button>
                        </div>
                        
                    </form>
                </Modal>

        </header>
    )
}

export default Header
