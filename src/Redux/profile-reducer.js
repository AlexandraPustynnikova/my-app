import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  posts: [
    { id: 1, message: "Hi! How are you?", likeCounts: "15" },
    { id: 2, message: "It's my first post", likeCounts: "22" },
    { id: 2, message: "It's my first post", likeCounts: "22" },
    { id: 2, message: "It's my first post", likeCounts: "22" },
    { id: 2, message: "It's my first post", likeCounts: "22" },
    { id: 2, message: "It's my first post", likeCounts: "22" },
    { id: 2, message: "It's my first post", likeCounts: "22" },
    { id: 2, message: "It's my first post", likeCounts: "22" },
  ],
  profile: null,
  status: "",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 11,
        message: action.newPostText,
        likeCounts: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI
    .getProfile(userId)
    .then((profile) => {
      dispatch(setUserProfile(profile));
    })
    .catch(() => {});
};
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
