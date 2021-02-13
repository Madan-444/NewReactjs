import React from 'react'

function Person({detail}) {
    console.log('My details is',detail)
    return (
        <div>
            <h1> Hello, My name is {detail.name} and i am {detail.age} years old and i work at {detail.skill} </h1>
        </div>
    )
}

export default Person
