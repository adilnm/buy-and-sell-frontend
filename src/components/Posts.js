import React, { Component } from 'react'

export default class Posts extends Component {
    render() {
        return (
            <div>
                <ul>
                {this.props.posts.map(post=>
                    <li key={post.id}>{post.title}</li>
                )}
                </ul>
            </div>
        )
    }
}
