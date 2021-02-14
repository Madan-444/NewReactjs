import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export class CompoF extends Component {
    render() {
        return (
            <UserConsumer >
                {
                    (username)=> {
                        return <div> Hello {username} </div>
                    }
                }
            </UserConsumer>
            // <div>
            //     <h2> Component F </h2>
            // </div>
        )
    }
}

export default CompoF
