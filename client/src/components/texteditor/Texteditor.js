import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getHomeData,
  createNewUserData,
  updateUserData,
} from "../../action/actions.js";

const Texteditor = () => {
  const dispatch = useDispatch();
  const roots = useSelector((state) => state.root);
  const user = JSON.parse(localStorage.getItem("profile"));

  var userId = user.result._id;
  var currentUserDataMainID = null;
  var userDataFind = false;
  var currentUserAllData = null;

  useEffect(() => {
    dispatch(getHomeData());
  }, [dispatch]);



  for (let index = 0; index < roots.length; index++) {
    let element = roots[index];
    for (let j = 0; j < element.length; j++) {
      let oneUserData = element[j];
      if (oneUserData.creator === userId) {
        currentUserDataMainID = oneUserData._id;
        currentUserAllData = oneUserData;
        userDataFind = true;
        console.log("User Data Found in DB");
      }
    }
  }

  const [userData, setUserData] = useState({ text: ""});

  useEffect(() => {
    if (currentUserAllData) setUserData({text: currentUserAllData.text});
  }, [currentUserAllData]);

  // if (currentUserAllData != null) {
  //   setUserData({ todos: currentUserAllData.todos });
  // }

  console.log("Text - Current User All Data : ", currentUserAllData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Todo add Button Clicked");

    if (userDataFind) {
      console.log("Need to update dispatch ");
      dispatch(
        updateUserData(currentUserDataMainID, {
          ...userData,
        })
      );
      // dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      // dispatch(updateUserData(currentUserDataMainID, { ...userData }));
    } else {
      userDataFind = true;
      console.log("User Data not Found. Need to create dispatch.");
      dispatch(createNewUserData({ ...userData, todos: [] }));
      // dispatch(createPost({ ...postData, name: user?.result?.name }));
      // dispatch(createNewUserData({ ...userData }));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          name="textareaa"
          placeholder="Type here..."
          value={userData.text}
          onChange={(e) => setUserData({ ...userData, text: e.target.value })}
        ></textarea>
        <button type="submit">Save Text</button>
      </form>
    </>
  );
};

export default Texteditor;
