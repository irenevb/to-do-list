import React from "react";

// importamos los components
import Todo from './Todo'

function TodoList({ todos, setTodos, todoByCat }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todoByCat.map(todo => (
          <Todo setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} todo = {todo}/> // todo = {todo} para poder hacer scroll down en cada uno
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
