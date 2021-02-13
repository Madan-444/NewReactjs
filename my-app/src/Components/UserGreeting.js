import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        return(
        
                this.state.isLoggedIn && <div> <h2>Welcome Madan </h2></div> 
                // <div>
                //     <h1> Welcome Guest. </h1>
                // </div>
        )
    }
}

//     render() {
//         if (this.state.isLoggedIn) {
//             return (
//                 <div>
//                     <div>Welcome Madan </div>
//                 </div>
//             )
//         } else {
//             return (
//                 <div>

//                     <div>Welcome Guest </div>
//                 </div>
//             )
//         }

//     }
// }

export default UserGreeting
