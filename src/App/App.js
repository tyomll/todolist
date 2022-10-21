import './App.css';
import { useState } from 'react';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
import TodoFooter from '../TodoFooter/TodoFooter';
import TodoHeader from '../TodoHeader/TodoHeader';
import SearchTask from '../SearchTask/SearchTask';
import Categories from '../Categories/Categories';

const App = () => {
  const [todos, setTodos] = useState([])
  const [buttonPopup, setButtonPopup] = useState(false)
  const [search, setSearch] = useState("")
  const [categories, setCategories] = useState([
    {
      id: Math.random(),
      text: "All Tasks",
    }
  ])
  const [category, setCategory] = useState("All Tasks")
  return (
    <div className='main'>
      <div className='container'>
        <Categories
          categories={categories}
          setCategory={setCategory}
          onCategoryAdd={(text) => {
            if (text !== "") {
              setCategories([
                ...categories,
                {
                  id: Math.random(),
                  text: text,
                }
              ])
            }
          }}
        />
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
          <TodoHeader todos={todos} category={category} />
          <div className="todo-body">
            <div className='todo-tasks'>
              <TodoList
                category={category}
                search={search}
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
                      isCompleted: false,
                      category: category
                    }
                  ])
                }

              }} />
          </div>
          <TodoFooter
            todos={todos}
            onClearCompleted={() => {
              setTodos(todos.filter((todo) => !todo.isCompleted))
            }} />
        </div>
      </div>
    </div>
  );
}

export default App;
