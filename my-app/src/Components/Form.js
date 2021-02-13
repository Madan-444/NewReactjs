import React, { Component } from 'react'
import MyName from './MyName'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comment: '',
             topic:'React',
             submit: false

        }
    }
    handleUsernameChange = (event)=> {
        this.setState({
            username: event.target.value
        })
        console.log(this.state.username)
    }
    handleCommentChange = (event)=> {
        this.setState({
            comment: event.target.value
        },()=> console.log(this.state.comment))
    }
    handleTopicChange = (event)=> {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit =(event)=> {
        this.setState({
            submit: true
        })
        event.preventDefault()
    }
        // <MyName username={this.state.username} comment= {this.state.comment} topic={this.state.topic} />
        // alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        
    
    
    render() {
        return (
          <div>
              <form onSubmit= {this.handleSubmit}>
              <div>
                  <label>Username</label>
                  <input type='text' value={this.state.username } onChange= {this.handleUsernameChange} />
              </div>
              <div>
                  <label> Coments </label>
                  <textarea value={this.state.comment} onChange={this.handleCommentChange} ></textarea>
              </div>
              <div>
                  <label> Topic </label>
                  <select value = {this.state.topic} onChange={this.handleTopicChange}>
                      <option>React</option>
                      <option>View</option>
                      <option>Angular</option>
                  </select>
              </div>
              <button type= 'submit'>Submit</button>
          </form>
          { this.state.submit && <MyName username={this.state.username} comment= {this.state.comment} topic={this.state.topic} />}
          
          </div>
        )
    }
}

export default Form
