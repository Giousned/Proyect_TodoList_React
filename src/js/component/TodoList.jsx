import React from "react";
import { useState, useEffect } from "react";

import ElementList from "./ElementList.jsx";

import "../../styles/todoList.css";

const arr = [{id:"Eat"},{id:"Drink"}];

const TodoList = () => {
  const [value, setValue] = useState("");
  const [estado, setEstado] = useState(arr);

  function addTasks (value) {
    setEstado( prev => {
        const newObj = {id: value};
        const newArr = [...prev,newObj];
        return newArr;
    })
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      if(value !== ""){
        addTasks(value);
        setValue("");
      }
      else alert("Escribe una tarea!");
    }
  }

  const handleClickSpan = (elemento) => {
    setEstado( prev => {
      const newArr2 = prev.filter((item) => item != elemento)
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