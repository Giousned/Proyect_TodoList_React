import React from "react";
import { useState, useEffect } from "react";

import ElementList from "./ElementList.jsx";

import "../../styles/todoList.css";

const arr = ["Eat","Drink"];

const TodoList = () => {
  const [value, setValue] = useState("");
  const [estado, setEstado] = useState(arr);

  function addTasks (value) {
    setEstado( prev => {
        const newArr = [...prev,value]
        return newArr;
    })
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
        addTasks(value);
        setValue("");
    }
  }

  const handleClickSpan = (elemento) => {
    setEstado( prev => {
      const newArr2 = prev.filter((item,index) => index != prev.indexOf(elemento));
      return newArr2;
    })
  }

  return (
    <div id="container">
      <h1 className="todo-header">To do List</h1>
      <input
        id="addToDo"
        type="text"
        placeholder="Add to do here"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => handleKeyDown(e)}
      />
      <ul>
        {estado.map((item,index)=>(
            <ElementList key={index} elemento={item} handleClickSpan={handleClickSpan}/>
        ))}
      </ul>
      <div className="todo-bottom">{estado.length} items left</div>
    </div>
  );
};

export default TodoList;

// setEstado( prev => {
//   const newArr2 = estado.filter(item => item != elemento);
//   return newArr2;
// })