import "./TodoFooter.css"

function TodoFooter({todos , onClearCompleted}) {
  const completedSize = todos.filter((todo) => todos.isCompleted).length
  return (
    <div className="todo-management">
      <p onClick={onClearCompleted}>Clear Selected</p>
    </div>
  );
}
export default TodoFooter;
