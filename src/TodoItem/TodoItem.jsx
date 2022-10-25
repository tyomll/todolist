import "./TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import swal from "sweetalert";

<<<<<<< HEAD
const TodoItem = ({ todo, onChange, onDelete, setCheckedCount, checkedCount }) => {
=======
const TodoItem = ({ todo, onChange, onDelete }) => {
>>>>>>> 3c2dfa29ffe818c70bf2fb4405522c5a1cdf054d
  const [editBtn, setEditBtn] = useState(true);
  const [saveBtn, setSaveBtn] = useState(false);

  function removeEditBtn() {
    setEditBtn(!editBtn);
    setSaveBtn(!saveBtn);
  }

  const normalMode = (
    <div className="task-div">
      <input
        type="checkbox"
        className="task-div-checkbox"
        checked={todo.isCompleted}
        onChange={(e) => {
          onChange({
            ...todo,
            isCompleted: e.target.checked,
          });
<<<<<<< HEAD
          if(e.target.checked === true){
            setCheckedCount(checkedCount+1)
          }
          else{
            setCheckedCount(checkedCount-1)
          }
          
=======
>>>>>>> 3c2dfa29ffe818c70bf2fb4405522c5a1cdf054d
        }}
      />
      <span className="task-div-title">{todo.text}</span>
      <button
        className="task-edit-btn"
        onClick={removeEditBtn}
        style={{ display: editBtn ? "inline-block" : "none" }}
      >
        <FontAwesomeIcon icon={faPen} size="lg" color="#306fcd" />
      </button>
      <button
        className="task-save-btn"
        onClick={removeEditBtn}
        style={{ display: saveBtn ? "inline-block" : "none" }}
      >
        <FontAwesomeIcon icon={faCheck} size="lg" color="#306fcd" />
      </button>
      <button
        className="task-delete-btn"
        onClick={() => {
          onDelete(todo);
        }}
      >
        <FontAwesomeIcon icon={faTrash} size="lg" color="#306fcd" />
      </button>
      <hr />
    </div>
  );

  const editMode = (
    <div className="task-div">
      <input
        type="checkbox"
        className="task-div-checkbox"
        checked={todo.isCompleted}
        onChange={(e) => {
          onChange({
            ...todo,
            isCompleted: e.target.checked,
          });
<<<<<<< HEAD
          if(e.target.checked === true){
            setCheckedCount(checkedCount+1)
          }
          else{
            setCheckedCount(checkedCount-1)
          }
=======
>>>>>>> 3c2dfa29ffe818c70bf2fb4405522c5a1cdf054d
        }}
      />
      <input
        className="task-div-title-input"
        value={todo.text}
        onChange={(e) => {
          onChange({
            ...todo,
            text: e.target.value,
          });
        }}
      ></input>
      <button
        className="task-edit-btn"
        onClick={removeEditBtn}
        style={{ display: editBtn ? "inline-block" : "none" }}
      >
        <FontAwesomeIcon icon={faPen} size="lg" color="#306fcd" />
      </button>
      <button
        className="task-save-btn"
        onClick={() => {
          if (todo.text !== "") {
            removeEditBtn();
          } else {
            swal("Oops...", "Task name can't be empty!", "error");
          }
        }}
        style={{ display: saveBtn ? "inline-block" : "none" }}
      >
        <FontAwesomeIcon icon={faCheck} size="lg" color="#306fcd" />
      </button>
      <button
        className="task-delete-btn"
        onClick={() => {
          onDelete(todo);
        }}
      >
        <FontAwesomeIcon icon={faTrash} size="lg" color="#306fcd" />
      </button>
      <hr />
    </div>
  );
  return editBtn ? normalMode : editMode;
};
export default TodoItem;
