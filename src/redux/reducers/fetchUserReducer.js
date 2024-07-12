import { TOGGLE_IS_LOGGED, TOGGLE_STATE, GET_USER_LOGGED_PROFILE } from "../actions/index";

const initialState = {
  isLogged: false,
  state: false,
  user_info: {},
};

const fetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_LOGGED:
      return {
        ...state,
        isLogged: true,
      };
    case GET_USER_LOGGED_PROFILE:
      return {
        ...state,
        user_info: action.payload,
      };
    case TOGGLE_STATE:
      return {
        ...state,
        state: action.payload,
      };

    default:
      return state;
  }
};

export default fetchUserReducer;
