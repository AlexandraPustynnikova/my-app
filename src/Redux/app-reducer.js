import { authAPI, usersAPI } from "../api/api";
import { toggleFollowingProgress, unfollowSuccess } from "./users-reducer";
import { authGet, getAuthUserData } from "./auth-reducer";

const INITIALISED_SUCCESS = "INITIALISED_SUCCESS";

let initialState = {
  initialized: false,
  email: null,
  login: null,
  isAuth: false,
  error: "",
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALISED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALISED_SUCCESS,
});
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  //dispatch(somethingElse())
  //dispatch(somethingElse())
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
