import { useState } from "react";
import "./TodoForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

function TodoForm({ onAdd, setButtonPopup }) {
  const [text, setText] = useState("");
  return (
    <div className="todo-input-form">
      <button className="todo-search" onClick={() => setButtonPopup(true)}>
        <FontAwesomeIcon icon={faSearch} size="lg" color="#306fcd" />
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAdd(text);
          setText("");
        }}
      >
        <button className="todo-add">
          <FontAwesomeIcon icon={faPlus} size="lg" color="#306fcd" />
        </button>
        <input
          type="text"
          placeholder="Enter New Task"
          className="todo-input"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
      </form>
    </div>
  );
}
export default TodoForm;
