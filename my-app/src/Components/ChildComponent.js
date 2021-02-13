import React from 'react'

function ChildComponent( {method} ) {
    return (
        <div>
            <button onClick = {()=> method('ChildComponent')}> Greet Component </button>
        </div>
    )
}

export default ChildComponent
