import React, { Component } from 'react'
import SignUp from './components/SignUp';
import Login from './components/Login';
import { connect } from 'react-redux';
import signup from './actions/SignUp'
import Logout from './components/Logout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Posts from './actions/Posts';
import Post from './components/Post';
import PostCreate from './components/PostCreate';
import MyPosts from './components/MyPosts';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditPost from './components/EditPost';
import loggedin from './actions/currentUser';

class App extends Component {

  componentDidMount() {
    this.props.Posts()
  }


  render() {
    // this.props.currentUser()
    // this.props.currentUser.length==0?this.props.loggedin():null
    if (this.props.currentUser.length==0) {
      this.props.loggedin()
    }
    return (
        <div className="main-page">
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={props => <Home{...props}/>} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/posts/:postId" render={props => <Post{...props} posts={this.props.posts}/>} />
            <Route exact path="/createPost" component={PostCreate}/>    
            <Route exact path="/myposts" component={MyPosts}/>    
            <Route exact path="/logout" component={Logout}/>    
            
            <Logout />
          </Switch>
        </div>
      </Router>
        </div>
    );
  }
}

const mstp = (state) => {
  return {
    currentUser: state.currentUser,
    posts:state.posts
  }
}


export default connect(mstp, { signup, Posts, loggedin})(App);
