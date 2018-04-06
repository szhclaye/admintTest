import { createStore } from "redux";

export const addTodo = text => ({
    type: "ADD",
    text
});

export const todos = (state = "my", action) => {
    switch (action.type) {
    case "ADD":
        return state;
    default:
        return state;
    }
};

export default createStore(todos);
