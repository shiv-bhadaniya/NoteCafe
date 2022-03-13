import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: "AUTH", data });

    router.push('/');
  } catch (error) {
    alert("Something went worng")
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: "AUTH", data });

    router.push('/');
  } catch (error) {
    alert("Something went worng")
    console.log(error);
  }
};
