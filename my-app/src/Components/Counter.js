import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    // buttonClick = ()=> {
    //     this.setState({
    //         count:this.state.count + 1
    //     })
    // }
    buttonClick() {
        this.setState({
            count:this.state.count +1 
        },
        ()=> {
            console.log('Callback Value',this.state.count)
        })
        console.log(this.state.count)
    }
    
    render() {
        const {count} = this.state
        return (
            <div>
                <h2>{count}</h2>
                <button onClick= {this.buttonClick.bind(this)}>Increse </button>
            </div>
        )
    }
}

export default Counter
