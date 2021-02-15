import React, {useContext} from 'react'
import {countContext} from '../App'

function HookCompoA() {
    const CountContext = useContext(countContext)
    return (
        <div>
            <h2> This is Component A Count -{CountContext.countState}</h2>
            <button onClick = {()=> CountContext.countDispatch('increment')}>Increment</button>
            <button onClick = {()=> CountContext.countDispatch('decrement')}>Decrement</button>
            <button onClick = {()=> CountContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default HookCompoA
