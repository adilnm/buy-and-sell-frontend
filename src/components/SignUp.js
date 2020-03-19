import React, { Component } from 'react'
import { connect } from 'react-redux';
import signup from '../actions/SignUp'
import Navbar from './Navbar';
import { FaUserAlt, FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/users', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user: this.state })
    }).then(res => res.json())
      .then(user => {
        debugger
        this.props.signup(user)
      })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div class="d-flex justify-content-center h-100">
            <div class="card">
              <div class="card-header">
                <h3>Sign Up</h3>
              </div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span ><FaUserAlt className="icon" size='1.5rem' /></span>
                    </div>
                    <input onChange={this.handleChange} className="form-control" name="firstName" placeholder="First Name" type="text" />
                  </div>

                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span ><FaUserAlt className="icon" size='1.5rem' /></span>
                    </div>
                    <input onChange={this.handleChange} className="form-control" name="lastName" placeholder="Last Name" type="text" />
                  </div>

                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span ><FaUserAlt className="icon" size='1.5rem' /></span>
                    </div>
                    <input onChange={this.handleChange} className="form-control" name="username" placeholder="Username" type="text" />
                  </div>

                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span ><MdEmail className="icon" size='1.5rem' /></span>
                    </div>
                    <input onChange={this.handleChange} className="form-control" name="email" placeholder="Email" type="email" />
                  </div>

                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span ><FaKey className="icon" size='1.5rem' /></span>
                    </div>
                    <input onChange={this.handleChange} className="form-control" name="password" placeholder="Password" type="password" />
                  </div>

                  <div className="form-group">
                    <input type="submit" className="btn float-right login_btn" value="Sign Up" />
                  </div>
                </form>
              </div>
              <div class="card-footer">
                <div class="d-flex justify-content-center links">
                  Already have an account?<Link to="/login">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default connect(null, { signup })(SignUp)