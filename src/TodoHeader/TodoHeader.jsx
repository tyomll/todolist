import "./TodoHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCut, faCopy, faPaste } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import uuid from "react-uuid";
function TodoHeader({
  todos,
  category,
  checkedCount,
  onPaste,
  onCut,
  setTodos,
}) {
  const [pasteButton, setPasteButton] = useState(false);
  const [filteredArr, setFilteredArr] = useState([]);
  const [cuttedArr, setCuttedArr] = useState([]);
  const [copyClicked, setCopyClicked] = useState(false);
  function handleCopyBtn() {
    setPasteButton(true);
  }
  const normalMode = (
    <div className="todo-heading">
      <h2 className="todo-heading-text">{category}</h2>
      <p className="todo-heading-count">
        <span>{todos.length} tasks remaining</span>
      </p>
    </div>
  );
  const editMode = (
    <div className="todo-heading">
      <h2 className="todo-heading-text">{category}</h2>
      <button
        className="cut"
        onClick={() => {
          setCopyClicked(!copyClicked);
          handleCopyBtn();
          setFilteredArr(
            todos
              .filter((todo) => {
                if (todo.isCompleted === true) {
                  return {
                    ...todo,
                    id: uuid(),
                    isCompleted: false,
                  };
                }
              })
              .map((todo) => {
                return {
                  ...todo,
                  id: uuid(),
                  isCompleted: false,
                };
              })
          );
          setTodos(
            todos.filter((todo) => {
              if (todo.isCompleted === false) {
                return {
                  ...todo,
                  id: uuid(),
                };
              }
            })
          );
        }}
      >
        <FontAwesomeIcon
          icon={faCut}
          size="lg"
          color="#306fcd"
        ></FontAwesomeIcon>
      </button>
      <button
        className="copy"
        onClick={() => {
          setCopyClicked(!copyClicked);
          handleCopyBtn();
          setFilteredArr(
            todos
              .filter((todo) => {
                if (todo.isCompleted === true) {
                  return {
                    ...todo,
                    id: uuid(),
                  };
                }
              })
              .map((todo) => {
                return {
                  ...todo,
                  isCompleted: false,
                  id: uuid(),
                };
              })
          );
        }}
      >
        <FontAwesomeIcon
          icon={faCopy}
          size="lg"
          color="#306fcd"
        ></FontAwesomeIcon>
      </button>
      <button
        onClick={() => {
          onPaste(
            filteredArr.map((todo) => 
              ({
                ...todo,
                id: uuid(),
              })
            )
          );
        }}
        className="paste"
        style={{ display: pasteButton ? "inline-block" : "none" }}
      >
        <FontAwesomeIcon
          icon={faPaste}
          size="lg"
          color="#306fcd"
        ></FontAwesomeIcon>
      </button>
      <p className="todo-heading-count">
        <span>{todos.length} tasks remaining</span>
      </p>
    </div>
  );
  if (checkedCount > 0) {
    return editMode;
  } else {
    return normalMode;
  }
}
export default TodoHeader;