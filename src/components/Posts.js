import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Posts extends Component {
    render() {
        const {posts}=this.props
        return (
            <div>
                <ul>
                {posts.map(post=>
                   <Link key={post.id} to={`/posts/${post.id}`}><li>{post.title}</li></Link>
                )}
                </ul>
            </div>
        )
    }
}
