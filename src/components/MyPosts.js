import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import myPosts from '../actions/MyPosts';
import Post from './Post';
import Navbar from './Navbar';

class MyPosts extends Component {
    componentDidMount(){
        this.props.myPosts()
    }
    render() {
        return (
            <div>
                {!this.props.currentUser.logged_in?this.props.history.push('/login'):null}
                <Navbar/>
                <h1>My Posts</h1>
                <div className="flex-container">
                    {this.props.userPosts.map(post => <Post post={post} />)}
                             {/* <Link key={post.id} to={`/posts/${post.id}`}><li>{post.title}</li></Link> */}
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
