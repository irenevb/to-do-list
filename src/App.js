import React, { useState, useEffect } from "react";
import "./App.css";

// importing components

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState("all"); // el default será all, aquí recojo la cat por la q el usuario quiere filtrar
  const [todoByCat, setTodoByCat] = useState([]); // se cogen de los todos únicamente los elementos por los que se quiere filtrar

  // Ejecutar una sola vez

  useEffect(() => {
    getLocalTodos();
  }, []);

  // Use effect

  useEffect(() => {
    todoByCatHandler();
    saveLocalTodos();
  }, [todos,category]); // esta función arrow vacía solamente se va a ejecutar una vez, con el component first render

  // Puedo decirle que se vuelva a ejecutar más veces si le doy un valor a la array
  // en este caso, se ejecutará cada vez que se modifique el todo

  // Functions and events

  const todoByCatHandler = () => {
    switch (category) {
      case "completed":
        setTodoByCat(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setTodoByCat(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setTodoByCat(todos);
        break;
    }
  };

  // Guardar en local

  const saveLocalTodos = () => {
    if (localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Irene's to do list</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setCategory={setCategory}
      />
      <TodoList setTodos={setTodos} todos={todos} todoByCat={todoByCat}/>
    </div>
  );
}

export default App;
