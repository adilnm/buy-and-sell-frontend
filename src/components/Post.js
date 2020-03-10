import React from 'react'

export default function Post({ posts, match }) {
    const postId = match.params.postId
    const post = posts.find(post => post.id == postId)
    return (
        <div className="card-wrapper">
            <div className="card card-rotating text-center">
                <div className="face front">
                    <h1>{post.title}</h1>
                    <h4>{post.price}</h4>
                    <p>{post.description}</p>
                    {/* <img className="background-image" src={post.image.url} alt="background" /> */}
                </div>
            </div>
        </div>
    )
}
