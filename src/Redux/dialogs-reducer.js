const SEND_MESSAGE = "ADD-MESSAGE";

let initialState = {
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
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 11,
        message: action.newMessageText,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };

    default:
      return state;
  }
};

export let addMessageActionCreator = (newMessageText) => ({
  type: SEND_MESSAGE,
  newMessageText,
});

export default dialogsReducer;
