import "./TodoHeader.css";

function TodoHeader({ todos, category }) {
  return (
    <div className="todo-heading">
      <h2 className="todo-heading-text">{category}</h2>
      <p className="todo-heading-count">
        <span>{todos.length} tasks remaining</span>
      </p>
    </div>
  );
}
export default TodoHeader;
