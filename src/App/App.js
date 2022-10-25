import './App.css';
import { useState } from 'react';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
import TodoFooter from '../TodoFooter/TodoFooter';
import TodoHeader from '../TodoHeader/TodoHeader';
import SearchTask from '../SearchTask/SearchTask';
import Categories from '../Categories/Categories';
<<<<<<< HEAD
import uuid from 'react-uuid';

const App = () => {

  const [todos, setTodos] = useState([])

=======

const App = () => {
  const [todos, setTodos] = useState([])
>>>>>>> 3c2dfa29ffe818c70bf2fb4405522c5a1cdf054d
  const [buttonPopup, setButtonPopup] = useState(false)
  const [search, setSearch] = useState("")
  const [categories, setCategories] = useState([
    {
<<<<<<< HEAD
      id: uuid(),
=======
      id: Math.random(),
>>>>>>> 3c2dfa29ffe818c70bf2fb4405522c5a1cdf054d
      text: "All Tasks",
    }
  ])
  const [category, setCategory] = useState("All Tasks")
<<<<<<< HEAD
  const [checkedCount, setCheckedCount] = useState(0)
=======
>>>>>>> 3c2dfa29ffe818c70bf2fb4405522c5a1cdf054d
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
<<<<<<< HEAD
                  id: uuid(),
=======
                  id: Math.random(),
>>>>>>> 3c2dfa29ffe818c70bf2fb4405522c5a1cdf054d
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
<<<<<<< HEAD
                  id: uuid(),
=======
                  id: Math.random(),
>>>>>>> 3c2dfa29ffe818c70bf2fb4405522c5a1cdf054d
                  text: text,
                  isCompleted: false
                }
              ])
            }

          }}
        />
        <div className="todo">
<<<<<<< HEAD
          <TodoHeader
            setTodos={setTodos}
            onPaste={(arr) => {
              setTodos(
                todos.concat(arr)
              )
              console.log("pasted Array -", arr)
              console.log("todos Array -" , todos)
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
=======
          <TodoHeader todos={todos} category={category} />
          <div className="todo-body">
            <div className='todo-tasks'>
              <TodoList
>>>>>>> 3c2dfa29ffe818c70bf2fb4405522c5a1cdf054d
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
<<<<<<< HEAD
                      id: uuid(),
=======
                      id: Math.random(),
>>>>>>> 3c2dfa29ffe818c70bf2fb4405522c5a1cdf054d
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
<<<<<<< HEAD

  );

=======
  );
>>>>>>> 3c2dfa29ffe818c70bf2fb4405522c5a1cdf054d
}

export default App;
