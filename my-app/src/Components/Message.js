import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Welcome Visitors'
        }
    }
    // buttonClick = ()=> {
    //     this.setState({
    //         message: 'Thank you for Subscribing.'
    //     })
    // }
    buttonClick(){
        this.setState({
            message:'Good bye'
        })
    }
    
    render() {
        return (
            <div>
                 <h2>{this.state.message}</h2>
                 <button onClick= {this.buttonClick.bind(this)}>Subscrive Now</button>
            </div>
        )
    }
}

export default Message
