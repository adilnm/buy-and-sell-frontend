import React, { Component } from 'react'
import { connect } from 'react-redux';
import signup from '../actions/SignUp'
import Navbar from './Navbar';
import background from "../images/transacton.jpg";
import '../style/style.css'
import { FaUserAlt, FaKey } from "react-icons/fa";

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    return this.props.currentUser[0].logged_in ? (this.props.history.push('/')) : null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/sessions', {
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
      .then(() => this.props.history.push('/'))

  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div class="d-flex justify-content-center h-100">
            <div class="card">
              <div class="card-header">
                <h3>Sign In</h3>
              </div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span ><FaUserAlt className="icon" size='1.5rem'/></span>
                    </div>
                    <input onChange={this.handleChange} className="form-control" name="username" placeholder="Username" type="text" /><br />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span ><FaKey className="icon" size='1.5rem'/></span>
                    </div>
                    <input onChange={this.handleChange} className="form-control" name="password" placeholder="Password" type="password" />
                  </div>
                  <div className="form-group">
                    <input type="submit" className="btn float-right login_btn" value="Log in" />
                  </div>
                </form>
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
    currentUser: state.currentUser
  }
}

export default connect(mstp, { signup })(Login)