import React from 'react'

export default function Post({ posts, match }) {
    const postId = match.params.postId
    const post = posts.find(post => post.id == postId)
    return (
        <div>
            <h1>{post.title}</h1>
            <h4>{post.price}</h4>
            <p>{post.description}</p>
        </div>
    )
}
