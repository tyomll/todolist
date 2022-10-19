import TodoItem from "../TodoItem/TodoItem";

function TodoList({ todos , onDelete, onChange, search}) {

  return (
    <div>
      {
        todos.filter((todo) => {
          return search.toLowerCase() === "" ?
          todo : todo.text.toLowerCase().includes(search)
        })
        .map((todo) => {
        return (
            <TodoItem
            key = {todo.id} 
            todo={todo}
            onChange={onChange}
            onDelete={onDelete}
            />
        )
      })}
    </div>
  );
}
export default TodoList;
