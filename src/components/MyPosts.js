import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import myPosts from '../actions/MyPosts';
import Post from './Post';
import Navbar from './Navbar';

class MyPosts extends Component {
    
    componentDidMount(){
        console.log('a')
        this.props.myPosts()
        console.log('b')
    }
    render() {
        return (
            <div >
                {!this.props.currentUser.logged_in?this.props.history.push('/login'):null}
                <Navbar/>
                <h1>My Posts</h1>
                <div className="flex-container">
                    {this.props.userPosts.map(post => <Post post={post} />)}
                </div>
            </div>
        )
    }
}

const mstp = state => (
    {
        userPosts: state.myPosts,
        currentUser:state.currentUser[0]
    }
)

export default connect(mstp, {myPosts})(MyPosts)
