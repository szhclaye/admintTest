import { createStore } from 'redux'

export const addTodo = (text)=>({
    type:'ADD_TODO',
    text
})


export const todoReducer = (state=[],action)=>{
    switch (action.type) {
        case 'ADD_TODO':
            return state
        default:
            return state;
    }
}

const store = createStore(todoReducer)
export default store