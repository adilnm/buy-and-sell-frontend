import React, { Component } from 'react'
import { connect } from 'react-redux';
import signup from '../actions/SignUp'

class Login extends Component {
    constructor() {
        super()
        this.state = {
          username:'',
          password:''
        }
      }

      handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
      }

      handleSubmit=(e)=>{
        e.preventDefault()
        fetch('http://localhost:3001/sessions',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
            body: JSON.stringify({user:this.state})
        }).then(res=>res.json())
          .then(user=>{
            this.props.signup(user)
          })
      }
     
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name="username" placeholder="Username"type="text"/><br/>
                    <input onChange={this.handleChange} name="password" placeholder="Password"type="password"/><br/>
                    <input type="submit" value="Log in"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {signup})(Login)