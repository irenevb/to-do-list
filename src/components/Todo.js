import React from "react";

function Todo({text, todo, todos, setTodos}) {

    // Events
const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id)); // estoy filtrando ese state e intentando encontrar el elemento al cual le hemos hecho click
};

const completeHandler = () => {
    setTodos(
        todos.map((item) => {
            if (item.id === todo.id) {
                return{
                    ...item,
                    completed: !item.completed,
                };
            }
            return item;
        }
        )
    );
};

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>  {/*aquí le digo con js que si está completed a true le añada completed a la clase, sino no hago nada (se queda en todo-item)*/}
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
