import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
          fistName:'',
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
        console.log(this.state)
      }
     
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name="fistName" placeholder="First Name"type="text"/><br/>
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
