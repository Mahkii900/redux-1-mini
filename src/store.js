import {createStore} from 'redux'

//INITIAL STATE
const initialState = {
    currentValue: 0
}

//ACTION CONSTS
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

//REDUCER
function countReducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {...state, currentValue: state.currentValue + action.payload}
        case DECREMENT:
            return {...state, currentValue: state.currentValue - action.payload}
        default: return state
    }
}

//EXPORT STORE/REDUCER
export default createStore(countReducer)