import React, { Component } from 'react'

import './Css/formStyle.css'
class FormHandling extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             password: '232432',
             comment: "",
             language: ''
        }
    }
    handleName = (e)=> {
        this.setState({
            name: e.target.value
        })
        
    }
    handlePassowrd = (e)=> {
        this.setState({
            password: e.target.value
        })
    }
    handleComment = (e)=> {
        this.setState({
            comment: e.target.value
        })
        
    }
    handleLanguage = (e)=> {
        this.setState({
            language: e.target.value
        })
    }
    handleSubmit = (event)=> {
        event.preventDefault();
        alert(`Your Name is ${this.state.name} and comment is ${this.state.comment}`)
        console.log("YOur comment is:",this.state.comment)
        console.log(this.state.language)
    }


    
    render() {
        const {name, password,comment} = this.state
        console.log("my Name is :", name)
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <section id="username">
                    <label>Username:</label> <input type='text'  onChange={this.handleName} value={name} />
                </section>
                <section id="password">
                    <label>Password:</label> <input type='password'  onChange={this.handlePassowrd}  value={password}/>
                </section>
                <section className="select-language">
                    <label>Knowledge About</label>
                    <select onChange={this.handleLanguage}>
                        <option>React Js </option>
                        <option>Angular Js </option>
                        <option>View Js </option>
                    </select>
                </section>
                <section id="comment">
                    <label>Comment:</label> <input type='text'  onChange={this.handleComment}  value={comment}/>
                </section>
                <section className="submitForm">
                    <button>Submit</button>
                </section>
            </form>
        )
    }
}

export default FormHandling
