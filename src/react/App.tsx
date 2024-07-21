import React, { useState } from 'react';

function App() {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState<string[]>([]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);

  const InputTodoChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setTodoInput(event.target.value)
  }

  const addTodo = () => {
    setTodos([...todos, todoInput]);
  }
  const completeTodo = (targetTodo: string) => {
    setTodos(todos.filter((todo) => todo != targetTodo))
    setCompleteTodos([...completeTodos, targetTodo])
  }
  const deleteTodo = (targetTodo: string) => {
    setTodos(todos.filter((todo) => todo != targetTodo))
  }
  const backTodo = (targetTodo: string) => {
    setCompleteTodos(todos.filter((todo) => todo != targetTodo))
    setTodos([...todos, targetTodo])
  }


  return (
    <>
      <h1>React version TODOS</h1>
      <div className="input-area">
          <input value={todoInput} onChange={InputTodoChangeHandler} placeholder="TODOを入力" />
          <button onClick={addTodo}>追加</button>
      </div>
      <div className="incomplete-area">
          <p className="title">未完了のTODO</p>
          <ul id="incomplete-list">
            {todos.map((todo) => {
              return(
                <li>
                  <p>{todo}</p>
                  <button onClick={() => completeTodo(todo)}>完了</button>
                  <button onClick={() => deleteTodo(todo)}>削除</button>
                </li>
              )
            })}
          </ul>
      </div>
      <div className="complete-area">
          <p className="title">完了のTODO</p>
          <ul id="complete-list">
            {completeTodos?.map((todo) => {
              return(
              <li>
                <p>{todo}</p>
                <button onClick={() => backTodo(todo)}>戻す</button>
              </li>
              )
            })}
          </ul>
      </div>
      <nav>
        <ul>
            <li><a href="../jquery/index.html">JQuery version</a></li>
        </ul>
      </nav>
    </>
  )
}

export default App
