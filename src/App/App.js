import './App.css';
import { useState } from 'react';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
import TodoFooter from '../TodoFooter/TodoFooter';
import TodoHeader from '../TodoHeader/TodoHeader';
import SearchTask from '../SearchTask/SearchTask';

const App = () => {
  const [todos, setTodos] = useState([])
  const [buttonPopup, setButtonPopup] = useState(false)
  const [search, setSearch] = useState("")
  return (
    <div className='container'>
      {console.log(search)}
      <SearchTask
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        setSearch={setSearch}
        onAdd={(text) => {
          if (text !== "") {
            setTodos([
              ...todos,
              {
                id: Math.random(),
                text: text,
                isCompleted: false
              }
            ])
          }

        }}
      />
      <div className="todo">
        <TodoHeader todos={todos} />
        <div className="todo-body">
          <div className='todo-tasks'>
            <TodoList
              search = {search}
              todos={todos}
              onDelete={(todo) => {
                setTodos(todos.filter((t) => {
                  return t.id !== todo.id
                }))
              }}
              onChange={(newTodo) => {
                setTodos(todos.map((todo) => {
                  if (todo.id === newTodo.id) {
                    return newTodo
                  }
                  return todo
                }))
              }}

            />
          </div>
          <TodoForm
            setButtonPopup={setButtonPopup}

            onAdd={(text) => {
              if (text !== "") {
                setTodos([
                  ...todos,
                  {
                    id: Math.random(),
                    text: text,
                    isCompleted: false
                  }
                ])
              }

            }} />
        </div>
        <TodoFooter todos={todos} onClearCompleted={() => {
          setTodos(todos.filter((todo) => !todo.isCompleted))
        }} />
      </div>
    </div>
  );
}

export default App;
