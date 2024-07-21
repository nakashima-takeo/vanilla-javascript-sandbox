import React, { useState } from 'react';

function App() {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState<string[]>([]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);

  const InputTodoChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value)
  }

  const addTodo = () => {
    if(todoInput == '') return;
    setTodos([...todos, todoInput]);
    setTodoInput('');
  }
  const completeTodo = (targetTodoIndex: number) => {
    console.log(targetTodoIndex)
    setCompleteTodos([...completeTodos, todos[targetTodoIndex]])
    console.log(todos)
    setTodos(todos.splice(targetTodoIndex+1, 1))
  }
  const deleteTodo = (targetTodoIndex: number) => {
    setTodos(todos.splice(targetTodoIndex+1, 1))
  }
  const backTodo = (targetTodoIndex: number) => {
    setTodos([...todos, completeTodos[targetTodoIndex]])
    setCompleteTodos(todos.splice(targetTodoIndex+1, 1))
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
            {todos.map((todo, index) =>
              (
                <li key={todo}>
                  <p>{todo}</p>
                  <button onClick={() => completeTodo(index)}>完了</button>
                  <button onClick={() => deleteTodo(index)}>削除</button>
                </li>
              )
            )}
          </ul>
      </div>
      <div className="complete-area">
          <p className="title">完了のTODO</p>
          <ul id="complete-list">
            {completeTodos?.map((todo, index) =>
              (
              <li key={todo}>
                <p>{todo}</p>
                <button onClick={() => backTodo(index)}>戻す</button>
              </li>
              )
            )}
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
