import React from 'react'

function MyName(props) {
    return (
        <div>
            <h2> My Name is {props.username}. My Comment is : {props.comment}. </h2>
            <h3> I work at {props.topic}</h3>
        </div>
    )
}

export default MyName
