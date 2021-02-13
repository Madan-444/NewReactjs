import React, { Component } from 'react'

export class Welcome extends Component {
    render() {
        const {name,age} = this.props
        return (
            <div>
                Welcome from Class components
                <h2> My name is {name}  and i am {age} years old. </h2>
                <h3> {this.props.children} </h3>
            </div>
        )
    }
}

export default Welcome
