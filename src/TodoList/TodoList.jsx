import TodoItem from "../TodoItem/TodoItem";
<<<<<<< HEAD
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
=======

function TodoList({ todos, onDelete, onChange, search, category }) {
>>>>>>> 3c2dfa29ffe818c70bf2fb4405522c5a1cdf054d
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
<<<<<<< HEAD
              setSelectionTools={setSelectionTools}
              checkedCount={checkedCount}
              setCheckedCount={setCheckedCount}
              category={category}
              key={uuid()}
=======
              category={category}
              key={todo.id}
>>>>>>> 3c2dfa29ffe818c70bf2fb4405522c5a1cdf054d
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
