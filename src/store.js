import {createStore} from 'redux'

//INITIAL STATE
const initialState = {
    currentValue: 0,
    futureValues: [],
    previousValues: []
}

//ACTION CONSTS
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const UNDO = 'UNDO'
export const REDO = 'REDO'

//REDUCER
function countReducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {
                currentValue: state.currentValue + action.payload,
                futureValues: [],
                previousValues: [state.currentValue, ...state.previousValues]
            }
        case DECREMENT:
            return {
                currentValue: state.currentValue - action.payload,
                futureValues: [],
                previousValues: [state.currentValue, ...state.previousValues]
            }
        case UNDO:
            var previousVals = state.previousValues.slice(1)
            return {
                currentValue: state.previousValues[0],
                futureValues: [state.currentValue, ...state.futureValues],
                previousValues: [...previousVals]
            }
        case REDO:
            return {
                currentValue: state.futureValues[0],
                futureValues: state.futureValues.slice(1),
                previousValues: [state.currentValue, ...state.previousValues]
            }
        default: return state
    }
}

//EXPORT STORE/REDUCER
export default createStore(countReducer)