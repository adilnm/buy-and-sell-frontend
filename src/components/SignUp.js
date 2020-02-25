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
     
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form>
                    <input placeholder="First Name"type="text"/><br/>
                    <input placeholder="Last Name"type="text"/><br/>
                    <input placeholder="Username"type="text"/><br/>
                    <input placeholder="Email"type="email"/><br/>
                    <input placeholder="Password"type="password"/><br/>
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }
}
