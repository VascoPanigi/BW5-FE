import axios from "axios";

export const TOGGLE_IS_LOGGED = "TOGGLE_IS_LOGGED";
export const TOGGLE_AUTHORITY = "TOGGLE_AUTHORITY";

export const GET_USER_LOGGED_PROFILE = "GET_USER_LOGGED_PROFILE";
export const GET_USER_LOGGED_TOKEN = "GET_USER_LOGGED_TOKEN";
export const GET_CLIENT = "GET_CLIENT";

export const fetchUserAction = (loginObject, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", loginObject);
      dispatch({
        type: GET_USER_LOGGED_TOKEN,
        payload: response.data,
      });
      localStorage.setItem("Bearer", response.data.token);
      console.log(response.data);
      navigate("/home");
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchUserInfoAction = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/users/me", {
        headers: { Authorization: "Bearer " + token },
      });
      dispatch({
        type: GET_USER_LOGGED_PROFILE,
        payload: response.data,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchClientListAction = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/clients", {
        headers: { Authorization: "Bearer " + token },
      });
      dispatch({
        type: GET_CLIENT,
        payload: response.data,
      });
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const postRegisterUser = (token, loginObject, navigate) => {
  return async () => {
    try {
      const response = await axios.post("http://localhost:3001/auth/register", loginObject, {
        headers: { Authorization: "Bearer " + token },
      });
      navigate("/home");
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };
};
