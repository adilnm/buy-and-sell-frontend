import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import myPosts from '../actions/MyPosts';

class MyPosts extends Component {
    render() {
        return (
            <div>
                {!this.props.currentUser.logged_in?this.props.history.push('/login'):null}
                {this.props.myPosts()}
                <h1>My Posts</h1>
                <ul>
                    {this.props.userPosts.map(post =>
                            <Link key={post.id} to={`/posts/${post.id}`}><li>{post.title}</li></Link>
                    )}
                </ul>
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
