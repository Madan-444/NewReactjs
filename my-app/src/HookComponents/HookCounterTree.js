import React, {useState} from 'react'

function HookCounterTree() {
    const [name,setName] = useState({
        firstName:'',
        lastName: ''
    })
    return (
        // const {firstName, lastName} = state.name
        <div>
            <label> First Name</label>
            <input type='text' value={name.firstName } onChange = {e => setName({...name,firstName: e.target.value})} />
            <label>Last Name </label>
            <input type='text' value = {name.lastname} onChange = {e => setName({...name,lastName:e.target.value})} />

            <h2> Your first Name is - {name.firstName} </h2>
            <h2> Your last Name is - {name.lastName} </h2>
            <h3> {JSON.stringify(name)} </h3>
        </div>
    )
}

export default HookCounterTree
