import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import {
  getHomeData,
  createNewUserData,
  updateUserData,
} from "../../action/actions";
import AllTodos from "./todos/AllTodos.js";

const Todo = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  // console.log("todos from Todo - current user information",user.result);
  const roots = useSelector((state) => state.root);
  const [userData, setUserData] = useState({ todos: "" });
  // console.log("allData - todo", roots);

  // const [userData, setUserData] = useState({ todos: "", text: "" });
  // const [userDataFind, setUserDataFind] = useState(false);

  var userId = user.result._id;
  var currentUserDataMainID = null;
  var userDataFind = false;
  var currentUserAllData = null;
  var currentUserAllTodo = null;

  useEffect(() => {
    dispatch(getHomeData());
  }, [dispatch]);

  // for (let index = 0; index < roots.length; index++) {
  //   let element = roots[index];
  //   for (let j = 0; j < element.length; j++) {
  //     let oneUserData = element[j];
  //     // console.log(oneUserData);
  //     // console.log(oneUserData.creator);
  //     if (oneUserData.creator === userId) {
  //       currentUserDataMainID = oneUserData._id;
  //       userDataFind = true;
  //       console.log("User Data Found in DB");
  //     }
  //   }
  // }

  // const clear = () => {
  //   // setUserData([]);
  // }

  for (let index = 0; index < roots.length; index++) {
    let element = roots[index];
    for (let j = 0; j < element.length; j++) {
      let oneUserData = element[j];
      // console.log(oneUserData);
      // console.log(oneUserData.creator);
      if (oneUserData.creator === userId) {
        currentUserAllData = oneUserData;
        currentUserDataMainID = oneUserData._id;
        userDataFind = true;
        console.log("User Data Found in DB");
      }
    }
  }
  console.log("currentUserAllData Todos :", currentUserAllData);

  // if (currentUserAllData != null) {
  //   setUserData({ text: currentUserAllData.text });
  // }


  console.log("Todo - Current User All Data : ", currentUserAllData);

  if(currentUserAllData) {
    console.log("Todo - Current User All Data after checking condition : ", currentUserAllData);
    currentUserAllTodo = currentUserAllData.todos;
  }

  console.log("currentUserAllTodo : ", currentUserAllTodo);

  const handleClickTodo = (e) => {
    e.preventDefault();
    console.log("Todo add Button Clicked");
    if (userDataFind) {
      console.log("Todo - Need to update dispatch ");
      dispatch(
        updateUserData(currentUserDataMainID, {
          ...userData,
          text: currentUserAllData.text,
        })
      );
      // dispatch(updateUserData(currentUserDataMainID, { ...userData }));
    } else {
      userDataFind = true;
      console.log("Todo - User Data not Found. Need to create dispatch.");
      dispatch(createNewUserData({ ...userData, text: "" }));
      // dispatch(createNewUserData({ ...userData }));
    }

    // clear();
  };

  return (
    <>
      <title>To Do List</title>
      <div class="box" id="heading">
        <AllTodos currentUserAllData={currentUserAllData}/>
      </div>

      <div class="box">
        <form class="item" onSubmit={handleClickTodo}>
          <input
            type="text"
            name="todos"
            placeholder="New Item"
            value={userData.todos}
            onChange={(e) =>
              setUserData({ ...userData, todos: e.target.value })
            }
            autocomplete="off"
          />
          <button type="submit" name="list">
            +
          </button>
        </form>
      </div>
    </>
  );
};

export default Todo;
