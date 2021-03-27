import React, { Component } from 'react'

export class UseOfLifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    handleCount = ()=> {
        this.setState({
            count: this.state.count + 1
        })
    }
    componentDidMount() {
        document.title= `Clicked ${this.state.count} times`
    }
    componentDidUpdate() {
        document.title =   `Clicked ${this.state.count} times`
    }
    
    render() {
        return (
            <div>
                <h2>Use of Lifecycle Method in Class Component</h2>
                <button onClick={this.handleCount}>clicked {this.state.count}</button>
            </div>
        )
    }
}

export default UseOfLifeCycle
