// import { createStore } from "redux";
const redux = require('redux');
const createStore = redux.createStore;
// Reducer
const counterReducer = (state = {value: 0, age:10}, action) => {
    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 5
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state;
    }
    return state;
}

// Store
const store = createStore(counterReducer);
console.log('Initialization Store', store.getState());

// Subcription
store.subscribe(() => {
    console.log('Subscribe', store.getState())
})

// Dispatch
store.dispatch({ type: 'ADD_AGE'})
store.dispatch({ type: 'CHANGE_VALUE', newValue: 10})
console.log('Result', store.getState());
