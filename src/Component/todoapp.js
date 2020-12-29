import React, { useState } from 'react';
import TodoForm from './todoform';
import Todo from './todo.js';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };
  const removeTodo = id => {
    const remainingTask = [...todos].filter(todo => todo.id !== id);

    setTodos(remainingTask);
  };

  
  return (
    <div>
        <div style={{margin:'auto',width:'80%'}}>
        <h1>Your Task: </h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} removeTodo={removeTodo}/>

        </div>
    </div>
  );
}

export default TodoList;