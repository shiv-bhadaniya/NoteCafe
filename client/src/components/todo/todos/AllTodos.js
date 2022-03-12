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

  return (
    <>
      {currentUserAllTodo ? (currentUserAllTodo.map((todo) => (
            <p>{todo}</p>
          ))) : <h1>Waite...</h1>}
    </>
  )
}

export default AllTodos;
