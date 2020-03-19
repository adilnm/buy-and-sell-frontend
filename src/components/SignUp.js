import React, { Component } from 'react'
import { connect } from 'react-redux';
import signup from '../actions/SignUp'
import Navbar from './Navbar';

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
          firstName:'',
          lastName:'',
          username:'',
          email:'',
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
        fetch('http://localhost:3001/users',{
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
            body: JSON.stringify({user:this.state})
        }).then(res=>res.json())
          .then(user=>{
            debugger
            this.props.signup(user)
          })
      }
     
    render() {
        return (
            <div>
              <Navbar />
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name="firstName" placeholder="First Name"type="text"/><br/>
                    <input onChange={this.handleChange} name="lastName" placeholder="Last Name"type="text"/><br/>
                    <input onChange={this.handleChange} name="username" placeholder="Username"type="text"/><br/>
                    <input onChange={this.handleChange} name="email" placeholder="Email"type="email"/><br/>
                    <input onChange={this.handleChange} name="password" placeholder="Password"type="password"/><br/>
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {signup})(SignUp)