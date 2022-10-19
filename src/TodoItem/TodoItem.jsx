import "./TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function TodoItem({ todo, onChange, onDelete }) {
  return (
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
        }}
      />
      <span className="task-div-title">{todo.text}</span>
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
}
export default TodoItem;
