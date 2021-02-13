import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler() {
        console.log('button is Clicked')
    }
    render() {
        return (
            <div>
                <h2> <button onClick = {this.clickHandler} >Click me</button> </h2>
            </div>
        )
    }
}

export default ClassClick
