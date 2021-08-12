import React, {useState} from "react";
import Select from "./Select";

function Form({ setInputText, todos, setTodos, inputText, setCategory,options }) {

  // Puedo escribir código js y funciones

  const [idUnique, setId] = useState(0);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, 
      {text: inputText, completed: false, id: idUnique } // mirar cómo crear ids únicos
    ]);
    setId(idUnique+1);
    setInputText("");
  };

  const setCategoryHandler = (e) => {
    setCategory(e.target.value);
  };

  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <Select options={options} func={setCategoryHandler}/>
      
    </form>
  );
}
// } renderizar los select con un json, o hacer un component select

export default Form;
