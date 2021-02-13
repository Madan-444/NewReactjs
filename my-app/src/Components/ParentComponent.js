import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Nima Rijal'
        }
    }
    greetParent=(childname)=> {
        alert(`Hello ${this.state.parentName} from the ${childname}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent method = {this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
