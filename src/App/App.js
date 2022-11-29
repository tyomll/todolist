import './App.css';
import { useState, useEffect } from 'react';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
import TodoFooter from '../TodoFooter/TodoFooter';
import TodoHeader from '../TodoHeader/TodoHeader';
import SearchTask from '../SearchTask/SearchTask';
import Categories from '../Categories/Categories';
import uuid from 'react-uuid';


const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos") || "[]")
const categoriesFromLocalStorage = JSON.parse(localStorage.getItem("categories") || [{
  id: uuid(),
  text: "All Tasks",

}])

const App = () => {
  const [todos, setTodos] = useState(todosFromLocalStorage)
  const [buttonPopup, setButtonPopup] = useState(false)
  const [search, setSearch] = useState("")
  const [categories, setCategories] = useState(categoriesFromLocalStorage)
  const [category, setCategory] = useState("All Tasks")
  const [checkedCount, setCheckedCount] = useState(0)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories))
  }, [categories])

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
                  id: uuid(),
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
                  id: uuid(),
                  text: text,
                  isCompleted: false
                }
              ])
            }

          }}
        />
        <div className="todo">
          <TodoHeader
            setTodos={setTodos}
            onPaste={(arr) => {
              setTodos(
                todos.concat(arr)
              )
              console.log("pasted Array -", arr)
              console.log("todos Array -", todos)
            }}
            checkedCount={checkedCount}
            todos={todos}
            category={category}
          />
          <div className="todo-body">
            <div className='todo-tasks'>
              <TodoList
                checkedCount={checkedCount}
                setCheckedCount={setCheckedCount}
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
                      id: uuid(),
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
