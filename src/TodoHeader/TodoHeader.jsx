import "./TodoHeader.css"

function TodoHeader ({todos}){
    return (
        <div className="todo-heading">
          <h2 className="todo-heading-text">Text</h2>
          <p className="todo-heading-count"><span>{todos.length} tasks remaining</span></p>
        </div>
    )
}
export default TodoHeader;