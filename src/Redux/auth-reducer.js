import { authAPI, usersAPI } from "../api/api";
import { toggleFollowingProgress, unfollowSuccess } from "./users-reducer";
import { initializedSuccess } from "./app-reducer";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const ERROR_MESSAGE = "ERROR_MESSAGE";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  error: "",
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});
export const errorAC = (error) => ({ type: ERROR_MESSAGE, payload: { error } });
export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login =
  (email, password, rememberMe, setError) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let serverErrorMessageResponse = response.data.messages[0];
      dispatch(errorAC(serverErrorMessageResponse));
    }
  };

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
export default authReducer;
