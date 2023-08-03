import data from '../firebaseConnection';

const redux = require('redux'); 

const noteInitialState = {}
const allReducers = (state = noteInitialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_NOTE':
            return state
        case 'UPDATE_NOTE':
            return state
        default:
            return state
    }
}
const store = redux.createStore(allReducers);

export default store;