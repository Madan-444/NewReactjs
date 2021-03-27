import React, {useState} from 'react'

function HooksWithObject() {
    const [name, setName] = useState({
        firstName:"",
        lastName:""
    })
    return (
        <div>
            <h3> first name is {name.firstName} and last name is {name.lastName} {JSON.stringify(name)} </h3>
            <form>
                <label>First Name</label> <input type="text" value={name.firstName} onChange={(e)=> setName({...name,firstName: e.target.value})} />
                <label>First Name</label> <input type="text" value={name.lastName} onChange={(e)=> setName({...name,lastName: e.target.value})} />
            </form>
        </div>
    )
}

export default HooksWithObject
