import React from "react";

function Todo({ text, todo, todos, setTodos }) {
  // Events
  const deleteHandler = (id) => {
    setTodos(todos.filter((el) => el.id !== id)); // estoy filtrando ese state e intentando encontrar el elemento al cual le hemos hecho click
  };

  const completeHandler = (id) => {
    // que ya tenga el id que ha clickado
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>{" "}
      {/*aquí le digo con js que si está completed a true le añada completed a la clase, sino no hago nada (se queda en todo-item)*/}
      <button onClick={() => completeHandler(todo.id)} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={() => deleteHandler(todo.id)} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
