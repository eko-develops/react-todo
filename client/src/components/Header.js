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

    //handles opening the modal
    const openModal = () => {
        setIsModalOpen(true);
    }

    //handles closing the modal
    const closeModal = () => {
        setIsModalOpen(false)
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
                        <input type="text" />
                        <label>Notes</label>
                        <textarea col="25" row="6" />
                        <div className="sort-buttons">
                            <button onClick={() => console.log('hello')}>Add Task</button>
                            <button onClick={closeModal}>Cancel</button>
                        </div>
                        
                    </form>
                </Modal>

        </header>
    )
}

export default Header
