import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             post: [],
             errMsg: ''
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({
                post: response.data
            })
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
            this.setState({
                errMsg: 'Error retreiving data'
            })
            
        })
    }
    
    render() {
        const {post,errMsg} = this.state
        
        return (
            <div>
                {
                    post.map(item=> <h2 key= {item.id}> {item.body} </h2> )
                }
                {
                    errMsg ? <h2> {errMsg} </h2> : null
                }
            </div>
        )
    }
}

export default PostList
