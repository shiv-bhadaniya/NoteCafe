import express from "express";
import mongoose from "mongoose";

import UserData from "../models/noteCafeModel.js";

const router = express.Router();

export const getHomeData = async (req, res) => {
  try {
    console.log("req.userId : ", req.userId);
    const homeData = await UserData.find();
    // console.log("Back-end homeData : ", homeData);
    res.status(200).json(homeData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createNewUserData = async (req, res) => {
  const newData = req.body;
  console.log(
    "first time data and entry in DB in back-end - controllers : ",
    newData
  );
  const newUserData = new UserData({ ...newData, creator: req.userId });

  try {
    await newUserData.save();
    res.status(201).json(newUserData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateUserData = async (req, res) => {
  const { id } = req.params;
  const { todos, creator, text } = req.body;
  console.log("all data", todos, creator, text);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedData = {
    creator,
    $push: { todos },
    text,
    _id: id,
  };
  console.log(
    `updateUserData Backend Called and data id is ${id} and updated Data is ${updatedData}`
  );
  await UserData.findByIdAndUpdate(id, updatedData, { new: true });

  res.json(updatedData);
};

export default router;
