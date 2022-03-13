import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OneTodo from "./oneTodo/OneTodo";

const AllTodos = ({currentUserAllData}) => {

  console.log("currentUserAllData from AllTodos : ", currentUserAllData);

  if(currentUserAllData) {
    var currentUserAllTodo = currentUserAllData.todos;
  }

  if(currentUserAllTodo) {
    console.log("currentUserAllTodo from AllTodos : ", currentUserAllTodo);
  }

  function applyStyle(e) {
    e.target.style.textDecorationLine = "line-through"
  }

  return (
    <>
      {currentUserAllTodo ? (currentUserAllTodo.map((todo, i) => (
            // <p onClick={applyStyle} >{todo}</p>
            <input name="{i}" value={todo} />
          ))) : <h1>Waite...</h1>}
    </>
  )
}

export default AllTodos;
