import React, { Component } from 'react'
import SignUp from './components/SignUp';
import Login from './components/Login';
import { connect } from 'react-redux';
import signup from './actions/SignUp'
import Logout from './components/Logout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

class App extends Component {

  componentDidMount() {
    this.loggedIn()
  }

  loggedIn() {
    fetch('http://localhost:3001/loggedin', { credentials: 'include' })
      .then(res => res.json())
      .then(user => {
        this.props.signup(user)
      })
  }

  render() {

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={props => <Home{...props}/>} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            {/* {this.props.currentUser[0]} */}
            <Logout />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mstp = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mstp, { signup })(App);
