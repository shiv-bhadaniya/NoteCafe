import * as api from "../api/index.js";

export const getHomeData = () => async (dispatch) => {
  try {
    // console.log("inside action");
    const { data } = await api.fetchHomeData();
    // console.log("action : ", data);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createNewUserData = (newUserData) => async (dispatch) => {
  try {
    const { data } = await api.createNewUserData(newUserData);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateUserData = (id, updatedUserData) => async (dispatch) => {
  try {
    const { data } = await api.updateUserData(id, updatedUserData);
    console.log(`Data for update for this ID ${id}`);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
