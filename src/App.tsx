import Modal from "./components/Modal/Modal";
import Transition from "react-transition-group/Transition";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { useState } from "react";
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showBlock, setShowBlock] = useState(false);

  const showModalHandler = () => {
    setModalIsOpen(true);
  };
  const closeModalHandler = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="App">
      <h1>React Animations</h1>
      <button
        className="Button"
        onClick={() =>
          setShowBlock((prevState) => {
            return !prevState;
          })
        }
      >
        Toggle
      </button>
      <br />
      <Transition in={showBlock} timeout={300} mountOnEnter unmountOnExit>
        {(state) => (
          <div
            style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
              margin: "auto",
              transition: "opacity 1s ease-out",
              opacity: state === "exiting" ? 0 : 1,
            }}
          ></div>
        )}
      </Transition>
      <Modal show={modalIsOpen} closed={closeModalHandler} />
      {modalIsOpen && (
        <Backdrop show={modalIsOpen} closed={closeModalHandler} />
      )}
      <button className="Button" onClick={showModalHandler}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;
