import React, {useReducer} from 'react'

const initialState =  {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action)=> {
    switch(action.type) {
        case 'increment' :
            return { ...state,firstCounter : state.firstCounter +action.payload}
        case 'decrement' :
            return { ...state,firstCounter : state.firstCounter -action.payload}
        case 'increment2' :
            return { ...state,secondCounter : state.secondCounter +action.payload}
        case 'decrement2' :
            return { ...state,secondCounter : state.secondCounter -action.payload}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function HooksCounterTo() {

   const [count,dispatch] =  useReducer(reducer,initialState)
    return (
        <div>
            <div> First Counter- {count.firstCounter} </div>
            <div> Second Counter - {count.secondCounter} </div>
            <button onClick = {()=> dispatch({type: 'increment',payload: 1})}>Increment</button>
            <button onClick = {()=> dispatch({type:'decrement', payload: 5})}>Decrement 5</button>
            <div>
            <button onClick = {()=> dispatch({type: 'increment2',payload: 1})}>Increment2</button>
            <button onClick = {()=> dispatch({type:'decrement2', payload: 5})}>Decrement2 5</button>
            </div>
            <button onClick = {()=> dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default HooksCounterTo
