import React from "react";
import { useState, useEffect } from "react";

import ElementList from "./ElementList.jsx";

import "../../styles/todoList.css";

const arr = ["Eat","Drink"];

const TodoList = () => {
  const [value, setValue] = useState("");
  const [estado, setEstado] = useState(arr);

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
        addTasks(value);
        setValue("");
    }
  }

  function addTasks (value) {
    setEstado( prev => {
        const newArr = [...estado,value]
        return newArr
    })
  }

  const handleClickSpan = (event) => {
    setEstado("");
        // const newArr2 = estado.filter(item => item != event.parentElement());
        // return event;
    }

//   useEffect(()=>{
//   },[arr])

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
