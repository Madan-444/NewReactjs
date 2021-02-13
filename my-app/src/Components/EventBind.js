import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hello'
        }
    }
    clickHandler(){
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }
    // clickHandler = () => {
    //     this.setState({
    //         message: 'Goodbye again'
    //     })
    //     console.log(this)
    // }    
    render() {
        const {message} = this.state
        return (
            <div>
                <h2> {message} </h2>
                <button onClick = {()=> this.clickHandler()} >Click Me</button>
            </div>
        )
    }
}

export default EventBind
