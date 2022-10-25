import TodoItem from "../TodoItem/TodoItem";
import uuid from 'react-uuid';
function TodoList({
  todos,
  onDelete,
  onChange,
  search,
  category,
  setCheckedCount,
  checkedCount,
  setSelectionTools,
}) {
  return (
    <div>
      {todos
        .filter((todo) => {
          if (todo.category === category) {
            return todo;
          }
        })
        .filter((todo) => {
          return search.toLowerCase() === ""
            ? todo
            : todo.text.toLowerCase().includes(search);
        })
        .map((todo) => {
          return (
            <TodoItem
              setSelectionTools={setSelectionTools}
              checkedCount={checkedCount}
              setCheckedCount={setCheckedCount}
              category={category}
              key={uuid()}
              todo={todo}
              onChange={onChange}
              onDelete={onDelete}
            />
          );
        })}
    </div>
  );
}
export default TodoList;
