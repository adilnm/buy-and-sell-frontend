import React, { Component } from 'react'
import SignUp from './components/SignUp';
import Login from './components/Login';
import { connect } from 'react-redux';
import signup from './actions/SignUp'
import Logout from './components/Logout';

class App extends Component{

  componentDidMount(){
    this.loggedIn()
  }

  loggedIn(){
    fetch('http://localhost:3001/loggedin',{credentials: 'include'})
      .then(res=>res.json())
      .then(user=>{
        this.props.signup(user)
      })
  }

  render(){
    return (
      <div className="App">
        <SignUp/>
        <Login/>
        <Logout/>
      </div>
    );
  }
}

export default connect(null, {signup})(App);
