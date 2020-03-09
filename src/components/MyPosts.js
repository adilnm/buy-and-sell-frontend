import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class MyPosts extends Component {
    render() {
        debugger
        return (
            <div>
                {!this.props.currentUser.logged_in?this.props.history.push('/login'):null}
                <h1>My Posts</h1>
                <ul>
                    {this.props.myPosts.map(post =>
                            <Link key={post.id} to={`/posts/${post.id}`}><li>{post.title}</li></Link>
                    )}
                </ul>
            </div>
        )
    }
}

const mstp = state => (
    {
        myPosts: state.userPosts,
        currentUser:state.currentUser[0]
    }
)

export default connect(mstp)(MyPosts)
