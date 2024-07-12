import axios from "axios";

export const TOGGLE_IS_LOGGED = "TOGGLE_IS_LOGGED";
export const TOGGLE_STATE = "TOGGLE_STATE";

export const GET_USER_LOGGED_PROFILE = "GET_USER_LOGGED_PROFILE";

export const fetchUserAction = (loginObject, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", loginObject);
      dispatch({
        type: GET_USER_LOGGED_PROFILE,
        payload: response.data,
      });
      localStorage.setItem("Bearer", response.data.token);
      console.log(response.data);
      navigate("/homepage");
    } catch (err) {
      console.log(err.message);
    }
  };
};
