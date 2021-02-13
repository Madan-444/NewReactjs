import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title:'',
             body:''
        }
    }
    changeHandlerId = (e)=> {
        this.setState({
            userId: e.target.value
        })
    }
    changeHandlerTitle = (e)=> {
        this.setState({
            title: e.target.value
        })
    }
    changeHandleBody = (e)=> {
        this.setState({
            body: e.target.value
        })
    }
    
    submitHandler =(e)=> {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response=> {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    render() {
        const {userId,title,body} = this.state
        return (
            <div>
                <form onSubmit = {this.submitHandler}>
                    <label>User Id</label>
                    <input type='text'  value={userId} onChange={this.changeHandlerId} />
                    <label> Title</label>
                    <input type='text' value={title} onChange={this.changeHandlerTitle} />
                    <input type='text' value={body} onChange={this.changeHandleBody} />
                    <label> Body </label>
                    <button type='submit'>submit</button>
                </form>
                
            </div>
        )
    }
}

export default PostForm
