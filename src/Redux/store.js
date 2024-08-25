import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
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
      newPostText: "it-kamasutra ",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Sasha" },
        { id: 2, name: "Artem" },
        { id: 3, name: "Mika" },
        { id: 4, name: "lana" },
        { id: 5, name: "Diana" },
        { id: 6, name: "Roberto" },
        { id: 7, name: "Nicolas" },
        { id: 8, name: "Victory" },
        { id: 9, name: "Lenn" },
        { id: 10, name: "Fill" },
      ],
      messages: [
        { id: 1, message: "Hi Hi" },
        { id: 2, message: "Yo" },
        { id: 3, message: "YoYoYo" },
        { id: 4, message: "WoHooooo" },
        { id: 5, message: "Yeeeeea" },
        { id: 6, message: "Uuuuu" },
        { id: 7, message: "Nice!" },
        { id: 8, message: "Yeees!" },
        { id: 9, message: "No" },
        { id: 10, message: "How aree you?" },
      ],
      newMessageText: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("State changed!");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
// window.store = store;
