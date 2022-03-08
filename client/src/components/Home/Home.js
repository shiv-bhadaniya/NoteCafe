import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Texteditor from "../texteditor/Texteditor";
import Todo from "../todo/Todo";
import "../../App.css";

import { getHomeData } from "../../action/actions";

const Home = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const roots = useSelector((state) => state.root);
  const [userDataFind, setUserDataFind] = useState(false);

  console.log("allData - from Home : ", roots);
  console.log("user Data - from Home : ", user);

  // var userId = user.result._id;

  // for (let index = 0; index < roots.length; index++) {
  //   const element = roots[index];
  //   for(let j = 0; j < element.length; j++) {
  //     let oneUserData = element[j];
  //     // console.log(oneUserData);
  //     // console.log(oneUserData.creator);
  //     if(oneUserData.creator === userId) {
  //       setUserDataFind(true);
  //       console.log("User Data Found ");
  //     }
  //   }
  // }

  // if(!userDataFind) {
  //   console.log("User Data not Found");
  // }

  useEffect(() => {
    dispatch(getHomeData());
  }, [dispatch]);

  return (
    <>
  <div className="container">
    <div className="box TodoBox">
      <Todo />
    </div>
    <div className="box TexteditorBox">
      <Texteditor  />
    </div>
    <div className="box chat">
      <iframe src="https://chatcafelogic.web.app/" height="1000px"></iframe>
    </div>
  </div>
</>
  );
};

export default Home;
