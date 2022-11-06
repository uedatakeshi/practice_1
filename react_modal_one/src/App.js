import React from 'react'
import ReactDOM  from 'react-dom';
import Modal  from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');


function App() {
  let subtitle;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modal2IsOpen, set2IsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function open2Modal() {
    set2IsOpen(true);
  }
  function close2Modal() {
    set2IsOpen(false);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }


  return (
    <div className="App">
      <div id="mine">
      <button onClick={openModal}>Open Modal</button>
      <button onClick={open2Modal}>Open Modal2</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        style={customStyles}
        id="game"
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>

      <Modal
        isOpen={modal2IsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={close2Modal}
        style={customStyles}
        id="game2"
        contentLabel="Example Modal"
      >
        <h2  ref={(_subtitle) => (subtitle = _subtitle)}>GoodBye</h2>
        <button onClick={close2Modal}>close</button>
        <div>I am a modal2</div>
      </Modal>

    </div>

    </div>
  );
}

export default App;
