import React, { Component } from 'react'
import { connect } from 'react-redux';
import signup from '../actions/SignUp'
import Navbar from './Navbar';
import { FaUserAlt, FaKey, FaPhone } from "react-icons/fa";
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
      password: '',
      errors: ''
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
        this.props.signup(user)
      })
      .then(() => {
        if (this.props.currentUser.logged_in) {
          this.props.history.push('/')
        }
        else {
          this.setState({
            errors: this.props.currentUser.errors
          })
          document.getElementById("errors").className += " alert alert-danger";
        }
      })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div class="d-flex justify-content-center h-100">
            <div class="card">
              <div id="errors" role="alert">
                <ul>
                  {
                  (this.state.errors) ?this.state.errors.map(error => <li>{error}</li>):null
                    
                  }
                </ul>
              </div>
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
                      <span ><FaPhone className="icon" size='1.5rem' /></span>
                    </div>
                    <input className="form-control" name="phonenumber" placeholder="Phone Number" type="tel" />
                  </div>

                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span ><FaKey className="icon" size='1.5rem' /></span>
                    </div>
                    <input onChange={this.handleChange} className="form-control" name="password" placeholder="Password" type="password" />
                  </div>

                  <div className="form-group">
                    <input type="submit" className="btn float-right login_btn" style={{ backgroundColor: "#FFC312" }} value="Sign Up" />
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

const mstp = (state) => {
  return {
    currentUser: state.currentUser[0]
  }
}

export default connect(mstp, { signup })(SignUp)