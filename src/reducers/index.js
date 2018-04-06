export const addTodo = text => ({
    type: "ADD",
    text
});

export default (todos = (state = "t", action) => {
    switch (action.type) {
    case "ADD":
        return state;
    default:
        return state;
    }
});
