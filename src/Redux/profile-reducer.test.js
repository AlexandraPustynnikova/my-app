import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";
import { render, screen } from "@testing-library/react";
import App from "../App";
let state = {
  posts: [
    { id: 0, message: "Hi! How are you?", likeCounts: "15" },
    { id: 1, message: "It's my first post", likeCounts: "22" },
    { id: 2, message: "It's my first post", likeCounts: "22" },
    { id: 3, message: "It's my first post", likeCounts: "22" },
    { id: 4, message: "It's my first post", likeCounts: "22" },
    { id: 5, message: "It's my first post", likeCounts: "22" },
    { id: 6, message: "It's my first post", likeCounts: "22" },
    { id: 7, message: "It's my first post", likeCounts: "22" },
  ],
};

describe("Profile reducer", () => {
  beforeEach(() => {
    state = {
      posts: [
        { id: 0, message: "Hi! How are you?", likeCounts: "15" },
        { id: 1, message: "It's my first post", likeCounts: "22" },
        { id: 2, message: "It's my first post", likeCounts: "22" },
        { id: 3, message: "It's my first post", likeCounts: "22" },
        { id: 4, message: "It's my first post", likeCounts: "22" },
        { id: 5, message: "It's my first post", likeCounts: "22" },
        { id: 6, message: "It's my first post", likeCounts: "22" },
        { id: 7, message: "It's my first post", likeCounts: "22" },
      ],
    };
  });

  it("length of post should be increment", () => {
    // 1. test data (готовим исходные данные)
    let action = addPostActionCreator("It_kamasutra");

    // 2. action (выполнили действие)
    let newState = profileReducer(state, action);

    // 3. expectation (проверяем, это действие завершилось правильно или неправильно)
    expect(newState.posts.length).toBe(9);
  });
  it("message of post should be correct", () => {
    // 1. test data (готовим исходные данные)
    let action = addPostActionCreator("It_kamasutra");

    // 2. action (выполнили действие)
    let newState = profileReducer(state, action);

    // 3. expectation (проверяем, это действие завершилось правильно или неправильно)
    expect(newState.posts[8].message).toBe("It_kamasutra");
  });
  it("after deleting length of messages should be dencremented", () => {
    // 1. test data (готовим исходные данные)
    let action = deletePost(1);

    // 2. action (выполнили действие)
    let newState = profileReducer(state, action);

    // 3. expectation (проверяем, это действие завершилось правильно или неправильно)
    expect(newState.posts.length).toBe(7);
  });

  it("after deleting length of messages shouldn,t be dencremented if id is incorrect", () => {
    // 1. test data (готовим исходные данные)
    let action = deletePost(1000);

    // 2. action (выполнили действие)
    let newState = profileReducer(state, action);

    // 3. expectation (проверяем, это действие завершилось правильно или неправильно)
    expect(newState.posts.length).toBe(8);
  });
});
